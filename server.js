require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('.'));

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
            output += `    {
        title: ${JSON.stringify(r.title)},
        description: ${JSON.stringify(r.description)},
        category: ${JSON.stringify(r.category)},
        language: ${JSON.stringify(r.language)},
        url: ${JSON.stringify(r.url)},
        image: ${JSON.stringify(r.image || '')}
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

// API: Hae resurssin tiedot URL:sta LLM:llä
app.post('/api/fetch-resource', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL puuttuu' });
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
            output += `    {
        title: ${JSON.stringify(r.title)},
        description: ${JSON.stringify(r.description)},
        category: ${JSON.stringify(r.category)},
        language: ${JSON.stringify(r.language)},
        url: ${JSON.stringify(r.url)},
        image: ${JSON.stringify(r.image || '')}
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
