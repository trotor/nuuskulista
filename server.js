require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = 3000;

// Generoi uniikki ID URL:sta (8-merkkinen hash)
function generateIdFromUrl(url) {
    // Normalisoi URL: pienennä, poista trailing slash ja ylimääräiset query-parametrit
    let normalized = url.toLowerCase().replace(/\/+$/, '');
    // Poista protokolla vertailusta
    normalized = normalized.replace(/^https?:\/\//, '');
    // Poista www.
    normalized = normalized.replace(/^www\./, '');
    // Luo MD5 hash ja ota ensimmäiset 8 merkkiä
    return crypto.createHash('md5').update(normalized).digest('hex').substring(0, 8);
}

// Hae kaikki olemassa olevat ID:t (sekä resources.js että harvest.json)
function getAllExistingIds() {
    const ids = new Set();

    // Lue resources.js
    try {
        const content = fs.readFileSync('resources.js', 'utf8');
        const resourcesMatch = content.match(/const resources = \[([\s\S]*)\];/);
        if (resourcesMatch) {
            const resources = eval(`[${resourcesMatch[1]}]`);
            resources.forEach(r => {
                if (r.id) ids.add(r.id);
            });
        }
    } catch (err) { /* ignore */ }

    // Lue harvest.json
    try {
        const harvest = readHarvest();
        harvest.forEach(r => {
            if (r.id) ids.add(r.id);
        });
    } catch (err) { /* ignore */ }

    return ids;
}

app.use(express.json());
app.use(express.static('.'));

// API: Hae versionumero ja changelog
app.get('/api/version', (req, res) => {
    const pkg = require('./package.json');
    res.json({ version: pkg.version, changelog: pkg.changelog || [] });
});

// Harvest-tiedoston käsittely
const HARVEST_FILE = 'harvest.json';

function readHarvest() {
    try {
        if (fs.existsSync(HARVEST_FILE)) {
            return JSON.parse(fs.readFileSync(HARVEST_FILE, 'utf8'));
        }
    } catch (err) {
        console.error('Harvest read error:', err);
    }
    return [];
}

function writeHarvest(data) {
    fs.writeFileSync(HARVEST_FILE, JSON.stringify(data, null, 2));
}

// API: Hae harvest-lista
app.get('/api/harvest', (req, res) => {
    res.json(readHarvest());
});

// API: Lisää harvestoitu resurssi
app.post('/api/harvest', (req, res) => {
    const harvest = readHarvest();
    const resource = req.body;

    // Generoi ID jos puuttuu
    if (!resource.id && resource.url) {
        resource.id = generateIdFromUrl(resource.url);
    }

    // Tarkista duplikaatti
    const existingIds = getAllExistingIds();
    if (existingIds.has(resource.id)) {
        return res.status(409).json({
            error: 'Duplikaatti',
            message: `Resurssi ID:llä ${resource.id} on jo olemassa`,
            id: resource.id
        });
    }

    resource.harvestedAt = new Date().toISOString();
    harvest.unshift(resource);
    writeHarvest(harvest);
    res.json({ success: true, count: harvest.length, id: resource.id });
});

// API: Hyväksy harvestoitu resurssi → siirrä resources.js:ään
app.post('/api/harvest/approve/:index', (req, res) => {
    try {
        const index = parseInt(req.params.index);
        const harvest = readHarvest();

        if (index < 0 || index >= harvest.length) {
            return res.status(400).json({ error: 'Virheellinen indeksi' });
        }

        const resource = harvest.splice(index, 1)[0];
        delete resource.harvestedAt;

        // Lue nykyiset resurssit
        const content = fs.readFileSync('resources.js', 'utf8');
        const resourcesMatch = content.match(/const resources = \[([\s\S]*)\];/);
        let resources = [];
        if (resourcesMatch) {
            resources = eval(`[${resourcesMatch[1]}]`);
        }

        // Lisää alkuun
        resources.unshift(resource);

        // Tallenna resources.js
        const today = new Date();
        const dateStr = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;

        let output = `// Päivitä tätä tiedostoa lisätäksesi uusia resursseja
// Muista päivittää myös lastUpdated-päivämäärä!

const lastUpdated = "${dateStr}";

const resources = [\n`;

        resources.forEach((r, i) => {
            // Generoi ID jos puuttuu
            if (!r.id && r.url) {
                r.id = generateIdFromUrl(r.url);
            }
            output += `    {
        id: ${JSON.stringify(r.id || '')},
        title: ${JSON.stringify(r.title)},
        description: ${JSON.stringify(r.description)},
        category: ${JSON.stringify(r.category)},
        language: ${JSON.stringify(r.language)},
        url: ${JSON.stringify(r.url)},
        image: ${JSON.stringify(r.image || '')}${r.location ? `,
        location: ${JSON.stringify(r.location)}` : ''}${r.featured ? `,
        featured: true` : ''}
    }`;
            if (i < resources.length - 1) output += ',';
            output += '\n';
        });

        output += '];\n';
        fs.writeFileSync('resources.js', output);

        // Tallenna päivitetty harvest
        writeHarvest(harvest);

        res.json({ success: true, message: 'Hyväksytty ja lisätty!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API: Poista harvestista
app.delete('/api/harvest/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const harvest = readHarvest();

    if (index < 0 || index >= harvest.length) {
        return res.status(400).json({ error: 'Virheellinen indeksi' });
    }

    harvest.splice(index, 1);
    writeHarvest(harvest);
    res.json({ success: true });
});

// API: Päivitä harvestoitu resurssi
app.put('/api/harvest/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const harvest = readHarvest();

    if (index < 0 || index >= harvest.length) {
        return res.status(400).json({ error: 'Virheellinen indeksi' });
    }

    const resource = req.body;
    resource.harvestedAt = harvest[index].harvestedAt; // Säilytä alkuperäinen aika
    harvest[index] = resource;
    writeHarvest(harvest);
    res.json({ success: true });
});

// API: Hae resurssit
app.get('/api/resources', (req, res) => {
    try {
        const content = fs.readFileSync('resources.js', 'utf8');
        const lastUpdatedMatch = content.match(/const lastUpdated = "([^"]+)"/);
        const resourcesMatch = content.match(/const resources = \[([\s\S]*)\];/);

        if (resourcesMatch) {
            const resourcesCode = `[${resourcesMatch[1]}]`;
            const resources = eval(resourcesCode);
            res.json({
                lastUpdated: lastUpdatedMatch ? lastUpdatedMatch[1] : '',
                resources: resources
            });
        } else {
            res.status(500).json({ error: 'Could not parse resources.js' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API: Tallenna resurssit
app.post('/api/resources', (req, res) => {
    try {
        const { resources } = req.body;

        const today = new Date();
        const dateStr = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;

        let output = `// Päivitä tätä tiedostoa lisätäksesi uusia resursseja
// Muista päivittää myös lastUpdated-päivämäärä!

const lastUpdated = "${dateStr}";

const resources = [\n`;

        resources.forEach((r, i) => {
            // Generoi ID jos puuttuu
            if (!r.id && r.url) {
                r.id = generateIdFromUrl(r.url);
            }
            output += `    {
        id: ${JSON.stringify(r.id || '')},
        title: ${JSON.stringify(r.title)},
        description: ${JSON.stringify(r.description)},
        category: ${JSON.stringify(r.category)},
        language: ${JSON.stringify(r.language)},
        url: ${JSON.stringify(r.url)},
        image: ${JSON.stringify(r.image || '')}${r.location ? `,
        location: ${JSON.stringify(r.location)}` : ''}${r.featured ? `,
        featured: true` : ''}
    }`;
            if (i < resources.length - 1) output += ',';
            output += '\n';
        });

        output += '];\n';

        fs.writeFileSync('resources.js', output);
        res.json({ success: true, message: 'Tallennettu!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Apufunktio: hae kuva URL:sta
async function fetchImageFromUrl(url) {
    try {
        const response = await fetch(url, {
            headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Nuuskulista/1.0)' }
        });
        if (!response.ok) return null;

        const html = await response.text();
        const cheerio = require('cheerio');
        const $ = cheerio.load(html);

        // Kokeile og:image ensin
        let image = $('meta[property="og:image"]').attr('content');
        if (!image) image = $('meta[name="og:image"]').attr('content');
        if (!image) image = $('meta[property="twitter:image"]').attr('content');

        // Jos löytyi suhteellinen URL, muunna absoluuttiseksi
        if (image && !image.startsWith('http')) {
            const urlObj = new URL(url);
            image = image.startsWith('/')
                ? `${urlObj.protocol}//${urlObj.host}${image}`
                : `${urlObj.protocol}//${urlObj.host}/${image}`;
        }

        // Jos ei og:image, kokeile faviconia
        if (!image) {
            const urlObj = new URL(url);
            image = `https://www.google.com/s2/favicons?domain=${urlObj.host}&sz=128`;
        }

        return image;
    } catch (err) {
        console.error('Image fetch error:', err.message);
        return null;
    }
}

// Apufunktio: tunnista ja käsittele Facebook-URL
function parseFacebookUrl(url) {
    const fbRegex = /^https?:\/\/(www\.)?(facebook\.com|fb\.watch|fb\.com)/i;
    if (!fbRegex.test(url)) return null;

    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/').filter(p => p);

    // Yritä päätellä sivun nimi ja tyyppi
    let pageName = '';
    let category = 'video'; // Oletus Facebookille

    // /pagename/reels/, /pagename/videos/, /pagename
    if (pathParts.length > 0) {
        pageName = pathParts[0].replace(/[_-]/g, ' ');
        // Muunna camelCase välilyönneiksi
        pageName = pageName.replace(/([a-z])([A-Z])/g, '$1 $2');
        // Isot alkukirjaimet
        pageName = pageName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }

    // Päättele kategoria polusta
    if (pathParts.includes('reels') || pathParts.includes('videos') || pathParts.includes('watch')) {
        category = 'video';
    } else if (pathParts.includes('posts') || pathParts.includes('photos')) {
        category = 'article';
    }

    return {
        title: pageName || 'Facebook-sivu',
        description: 'Täydennä kuvaus',
        category: category,
        language: 'Englanti',
        url: url,
        image: 'https://www.facebook.com/images/fb_icon_325x325.png',
        _isFacebook: true
    };
}

// API: Hae resurssin tiedot URL:sta LLM:llä
app.post('/api/fetch-resource', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL puuttuu' });
    }

    // Tarkista onko Facebook-URL
    const fbData = parseFacebookUrl(url);
    if (fbData) {
        // Palauta Facebook-tiedot suoraan ilman hakua
        delete fbData._isFacebook;
        fbData.id = generateIdFromUrl(url);
        return res.json(fbData);
    }

    // Tarkista API-avain
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({
            error: 'OPENAI_API_KEY ympäristömuuttuja puuttuu. Käynnistä: OPENAI_API_KEY=xxx npm run admin'
        });
    }

    try {
        // Hae sivu
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; Nuuskulista/1.0)'
            }
        });

        if (!response.ok) {
            return res.status(400).json({ error: `Sivun haku epäonnistui: ${response.status}` });
        }

        const html = await response.text();

        // Parsii HTML cheerio:lla
        const cheerio = require('cheerio');
        const $ = cheerio.load(html);

        // Hae og:image
        let image = $('meta[property="og:image"]').attr('content');
        if (!image) image = $('meta[name="og:image"]').attr('content');
        if (!image) image = $('meta[property="twitter:image"]').attr('content');

        // Muunna suhteellinen URL absoluuttiseksi
        if (image && !image.startsWith('http')) {
            const urlObj = new URL(url);
            image = image.startsWith('/')
                ? `${urlObj.protocol}//${urlObj.host}${image}`
                : `${urlObj.protocol}//${urlObj.host}/${image}`;
        }

        // Fallback: Google favicon
        if (!image) {
            const urlObj = new URL(url);
            image = `https://www.google.com/s2/favicons?domain=${urlObj.host}&sz=128`;
        }

        // Kerää tekstisisältöä
        $('script, style, nav, footer, header').remove();
        const title = $('title').text().trim() || $('h1').first().text().trim();
        const metaDesc = $('meta[name="description"]').attr('content') || '';
        const bodyText = $('body').text().replace(/\s+/g, ' ').trim().substring(0, 3000);

        // Lähetä OpenAI:lle
        const OpenAI = require('openai');
        const openai = new OpenAI({ apiKey });

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'system',
                    content: `Olet avustaja joka analysoi nettisivuja noutajakoirien koulutusmateriaalien listaa varten.

Palauta JSON-muodossa:
{
  "title": "Resurssin nimi (lyhyt, kuvaava)",
  "description": "1-2 virkkeen kuvaus sisällöstä suomeksi",
  "category": "podcast|video|article|course|trainer|shop|other",
  "language": "Suomi|Englanti|Ruotsi|Saksa"
}

Kategoriat:
- podcast: Podcastit, äänitteet
- video: YouTube, webinaarit, videokurssit
- article: Artikkelit, blogit, oppaat
- course: Verkkokurssit, koulutusohjelmat
- trainer: Kouluttajat, valmentajat
- shop: Verkkokaupat, tarvikkeet
- other: Muut

Tunnista kieli sisällöstä. Palauta VAIN JSON, ei muuta tekstiä.`
                },
                {
                    role: 'user',
                    content: `URL: ${url}
Otsikko: ${title}
Meta-kuvaus: ${metaDesc}
Sisältöä: ${bodyText.substring(0, 2000)}`
                }
            ],
            temperature: 0.3
        });

        const content = completion.choices[0].message.content;

        // Parsii JSON vastauksesta
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            return res.status(500).json({ error: 'LLM ei palauttanut validia JSONia' });
        }

        const resourceData = JSON.parse(jsonMatch[0]);
        resourceData.id = generateIdFromUrl(url);
        resourceData.url = url;
        resourceData.image = image;

        res.json(resourceData);

    } catch (err) {
        console.error('Fetch error:', err);
        res.status(500).json({ error: err.message });
    }
});

// API: Päivitä yksittäisen resurssin kuva
app.post('/api/refresh-image', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL puuttuu' });
    }

    try {
        const image = await fetchImageFromUrl(url);
        if (image) {
            res.json({ success: true, image });
        } else {
            res.json({ success: false, error: 'Kuvaa ei löytynyt' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API: Päivitä kaikkien resurssien kuvat
app.post('/api/refresh-images', async (req, res) => {
    try {
        const content = fs.readFileSync('resources.js', 'utf8');
        const resourcesMatch = content.match(/const resources = \[([\s\S]*)\];/);

        if (!resourcesMatch) {
            return res.status(500).json({ error: 'Could not parse resources.js' });
        }

        const resourcesCode = `[${resourcesMatch[1]}]`;
        const resources = eval(resourcesCode);

        let updated = 0;
        const total = resources.length;

        // Päivitä kuvat rinnakkain (max 5 kerralla)
        const batchSize = 5;
        for (let i = 0; i < resources.length; i += batchSize) {
            const batch = resources.slice(i, i + batchSize);
            const results = await Promise.all(
                batch.map(async (r) => {
                    const image = await fetchImageFromUrl(r.url);
                    if (image) {
                        r.image = image;
                        updated++;
                    }
                    return r;
                })
            );
            // Korvaa päivitetyt takaisin
            for (let j = 0; j < results.length; j++) {
                resources[i + j] = results[j];
            }
        }

        // Tallenna päivitetyt resurssit
        const today = new Date();
        const dateStr = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;

        let output = `// Päivitä tätä tiedostoa lisätäksesi uusia resursseja
// Muista päivittää myös lastUpdated-päivämäärä!

const lastUpdated = "${dateStr}";

const resources = [\n`;

        resources.forEach((r, i) => {
            // Generoi ID jos puuttuu
            if (!r.id && r.url) {
                r.id = generateIdFromUrl(r.url);
            }
            output += `    {
        id: ${JSON.stringify(r.id || '')},
        title: ${JSON.stringify(r.title)},
        description: ${JSON.stringify(r.description)},
        category: ${JSON.stringify(r.category)},
        language: ${JSON.stringify(r.language)},
        url: ${JSON.stringify(r.url)},
        image: ${JSON.stringify(r.image || '')}${r.location ? `,
        location: ${JSON.stringify(r.location)}` : ''}${r.featured ? `,
        featured: true` : ''}
    }`;
            if (i < resources.length - 1) output += ',';
            output += '\n';
        });

        output += '];\n';

        fs.writeFileSync('resources.js', output);
        res.json({ success: true, updated, total, message: `Päivitetty ${updated}/${total} kuvaa` });

    } catch (err) {
        console.error('Refresh images error:', err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`\n🐕 Nuuskulista Admin`);
    console.log(`   http://localhost:${PORT}/admin.html`);
    if (!process.env.OPENAI_API_KEY) {
        console.log(`\n⚠️  OPENAI_API_KEY puuttuu - URL-haku ei toimi`);
        console.log(`   Käynnistä: OPENAI_API_KEY=xxx npm run admin\n`);
    } else {
        console.log(`   ✓ OpenAI API käytössä\n`);
    }
});
