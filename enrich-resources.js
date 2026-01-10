/**
 * Resurssien rikastaminen
 *
 * Tämä skripti käy läpi resurssit ja rikastaa niitä lisätiedoilla,
 * kuten paikkakunnalla. Paikkakunta haetaan resurssin sivulta jos
 * se on relevantti (kouluttajat, verkkokaupat, yhdistykset).
 *
 * Käyttö:
 *   node enrich-resources.js [--dry-run] [--category=trainer] [--id=abc123]
 *
 * Optiot:
 *   --dry-run     Näyttää muutokset mutta ei tallenna
 *   --category=X  Käsittele vain tietty kategoria (trainer, shop, course, other)
 *   --id=X        Käsittele vain tietty resurssi ID:llä
 *   --force       Päivitä myös resurssit joilla on jo paikkakunta
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const OpenAI = require('openai');
const config = require('./config');

// Kategoriat joille paikkakunta on relevantti
const LOCATION_RELEVANT_CATEGORIES = config.locationRelevantCategories;

// Facebook-URL tunnistus (ei voi hakea sivua)
function isFacebookUrl(url) {
    return /^https?:\/\/(www\.)?(facebook\.com|fb\.watch|fb\.com)/i.test(url);
}

// Suomen kaupungit ja kunnat tunnistusta varten
const FINNISH_CITIES = [
    'Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Oulu', 'Turku', 'Jyväskylä',
    'Lahti', 'Kuopio', 'Pori', 'Kouvola', 'Joensuu', 'Lappeenranta', 'Hämeenlinna',
    'Vaasa', 'Seinäjoki', 'Rovaniemi', 'Mikkeli', 'Kotka', 'Salo', 'Porvoo',
    'Kokkola', 'Hyvinkää', 'Lohja', 'Järvenpää', 'Rauma', 'Kajaani', 'Kerava',
    'Savonlinna', 'Nokia', 'Ylöjärvi', 'Kangasala', 'Vihti', 'Riihimäki',
    'Imatra', 'Raisio', 'Sastamala', 'Raahe', 'Hollola', 'Lempäälä', 'Tornio',
    'Siilinjärvi', 'Kuusamo', 'Valkeakoski', 'Mäntsälä', 'Iisalmi', 'Varkaus',
    'Hamina', 'Heinola', 'Forssa', 'Kaarina', 'Pietarsaari', 'Jämsä',
    // Alueet
    'Uusimaa', 'Varsinais-Suomi', 'Pirkanmaa', 'Pohjois-Savo', 'Keski-Suomi',
    'Pohjois-Pohjanmaa', 'Satakunta', 'Päijät-Häme', 'Etelä-Savo', 'Lappi',
    'Kanta-Häme', 'Etelä-Pohjanmaa', 'Pohjanmaa', 'Kymenlaakso', 'Pohjois-Karjala',
    'Kainuu', 'Etelä-Karjala', 'Keski-Pohjanmaa', 'Ahvenanmaa'
];

// OpenAI client
let openai = null;
if (process.env.OPENAI_API_KEY) {
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

// Parse command line arguments
function parseArgs() {
    const args = process.argv.slice(2);
    const options = {
        dryRun: false,
        category: null,
        id: null,
        force: false
    };

    args.forEach(arg => {
        if (arg === '--dry-run') options.dryRun = true;
        if (arg === '--force') options.force = true;
        if (arg.startsWith('--category=')) options.category = arg.split('=')[1];
        if (arg.startsWith('--id=')) options.id = arg.split('=')[1];
    });

    return options;
}

// Lue resources.js
function readResources() {
    const resourcesPath = path.join(__dirname, 'resources.js');
    const content = fs.readFileSync(resourcesPath, 'utf8');

    // Extrahoi resources array
    const match = content.match(/const resources = \[([\s\S]*?)\];/);
    if (!match) {
        throw new Error('Could not parse resources.js');
    }

    // Eval on turvallinen tässä koska luemme omaa tiedostoamme
    const resourcesStr = `[${match[1]}]`;
    const resources = eval(resourcesStr);

    return { resources, originalContent: content };
}

// Lue harvest.json
function readHarvest() {
    const harvestPath = path.join(__dirname, 'harvest.json');
    if (!fs.existsSync(harvestPath)) {
        return { resources: [], exists: false };
    }
    const content = fs.readFileSync(harvestPath, 'utf8');
    return { resources: JSON.parse(content), exists: true };
}

// Hae sivu ja palauta teksti sekä kuva
async function fetchPage(url) {
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': `Mozilla/5.0 (compatible; ${config.ai.userAgent.enricher})`
            },
            timeout: 10000
        });

        if (!response.ok) {
            console.log(`  ⚠️  HTTP ${response.status} for ${url}`);
            return null;
        }

        const html = await response.text();
        const $ = cheerio.load(html);

        // Hae kuva (og:image, twitter:image tai favicon)
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

        // Poista skriptit ja tyylit tekstiä varten
        $('script, style, nav, footer, header').remove();

        // Hae pääsisältö
        const text = $('body').text()
            .replace(/\s+/g, ' ')
            .trim()
            .substring(0, 5000); // Rajoita 5000 merkkiin

        return { text, image };
    } catch (error) {
        console.log(`  ⚠️  Fetch error for ${url}: ${error.message}`);
        return null;
    }
}

// Etsi paikkakunta tekstistä yksinkertaisella haulla
function findLocationSimple(text) {
    if (!text) return null;

    const textUpper = text.toLowerCase();

    for (const city of FINNISH_CITIES) {
        // Tarkista löytyykö kaupunki tekstistä
        const cityLower = city.toLowerCase();
        if (textUpper.includes(cityLower)) {
            // Varmista että se ei ole osa isompaa sanaa
            const regex = new RegExp(`\\b${city}\\b`, 'i');
            if (regex.test(text)) {
                return city;
            }
        }
    }

    return null;
}

// Etsi paikkakunta AI:n avulla
async function findLocationWithAI(text, resourceTitle) {
    if (!openai || !text) return null;

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'system',
                    content: config.ai.locationPrompt
                },
                {
                    role: 'user',
                    content: `Etsi paikkakunta tai alue tälle resurssille: "${resourceTitle}"\n\nSivun sisältö:\n${text.substring(0, 3000)}`
                }
            ],
            max_tokens: 50,
            temperature: 0
        });

        const result = response.choices[0].message.content.trim();

        if (result === 'null' || result.toLowerCase() === 'null') {
            return null;
        }

        return result;
    } catch (error) {
        console.log(`  ⚠️  AI error: ${error.message}`);
        return null;
    }
}

// Rikasta yksittäinen resurssi
async function enrichResource(resource, options) {
    const changes = {};

    // Tarkista onko paikkakunta relevantti tälle kategorialle
    if (!LOCATION_RELEVANT_CATEGORIES.includes(resource.category)) {
        return null;
    }

    // Ohita jos paikkakunta on jo ja force ei ole päällä
    if (resource.location && !options.force) {
        return null;
    }

    // Ohita jos ei ole URL:ia
    if (!resource.url) {
        return null;
    }

    console.log(`\n📍 Haetaan paikkakuntaa: ${resource.title}`);
    console.log(`   URL: ${resource.url}`);

    // Facebook-sivuja ei voi hakea - yritä etsiä paikkakunta otsikosta
    if (isFacebookUrl(resource.url)) {
        console.log(`   ℹ️  Facebook-sivu, yritetään otsikosta...`);
        const location = findLocationSimple(resource.title);
        if (location) {
            console.log(`   ✅ Löytyi otsikosta: ${location}`);
            return { location, enrichedAt: new Date().toISOString() };
        }
        console.log(`   ⏭️  Ohitetaan (ei paikkakuntaa otsikossa)`);
        return null;
    }

    // Hae sivu
    const pageData = await fetchPage(resource.url);

    if (!pageData) {
        return null;
    }

    // Tarkista ja päivitä kuva jos puuttuu
    if (!resource.image && pageData.image) {
        console.log(`   🖼️  Kuva: ${pageData.image.substring(0, 50)}...`);
        changes.image = pageData.image;
    }

    // Kokeile ensin yksinkertaista hakua
    let location = findLocationSimple(pageData.text);

    // Jos ei löydy ja AI on käytettävissä, kokeile AI:ta
    if (!location && openai) {
        location = await findLocationWithAI(pageData.text, resource.title);
    }

    if (location) {
        console.log(`   ✅ Löytyi: ${location}`);
        changes.location = location;
    }

    if (Object.keys(changes).length > 0) {
        changes.enrichedAt = new Date().toISOString();
    } else {
        console.log(`   ❌ Ei muutoksia`);
    }

    return Object.keys(changes).length > 0 ? changes : null;
}

// Tallenna resources.js
function saveResources(resources, originalContent) {
    // Muodosta uusi resources array merkkijonona
    const resourcesStr = JSON.stringify(resources, null, 4)
        .replace(/"(\w+)":/g, '$1:') // Poista lainausmerkit avaimista
        .replace(/"/g, '"'); // Käytä tavallisia lainausmerkkejä

    // Korvaa vanha resources array
    const newContent = originalContent.replace(
        /const resources = \[[\s\S]*?\];/,
        `const resources = ${resourcesStr};`
    );

    fs.writeFileSync(path.join(__dirname, 'resources.js'), newContent);
}

// Tallenna harvest.json
function saveHarvest(resources) {
    fs.writeFileSync(
        path.join(__dirname, 'harvest.json'),
        JSON.stringify(resources, null, 2)
    );
}

// Pääfunktio
async function main() {
    const options = parseArgs();

    console.log('🔍 Resurssien rikastaminen\n');
    console.log('Asetukset:');
    console.log(`  Dry run: ${options.dryRun}`);
    console.log(`  Force: ${options.force}`);
    console.log(`  Kategoria: ${options.category || 'kaikki relevantit'}`);
    console.log(`  ID: ${options.id || 'kaikki'}`);
    console.log(`  OpenAI: ${openai ? 'käytössä' : 'ei käytössä'}`);

    // Lue resurssit
    const { resources, originalContent } = readResources();
    const harvest = readHarvest();

    console.log(`\nLöytyi ${resources.length} resurssia resources.js:stä`);
    console.log(`Löytyi ${harvest.resources.length} resurssia harvest.json:sta`);

    let resourcesModified = 0;
    let harvestModified = 0;

    // Käsittele resources.js
    console.log('\n--- Resources.js ---');
    for (let i = 0; i < resources.length; i++) {
        const resource = resources[i];

        // Suodata kategorian mukaan
        if (options.category && resource.category !== options.category) continue;

        // Suodata ID:n mukaan
        if (options.id && resource.id !== options.id) continue;

        const changes = await enrichResource(resource, options);

        if (changes) {
            Object.assign(resources[i], changes);
            resourcesModified++;
        }

        // Pieni viive pyyntöjen välillä
        await new Promise(r => setTimeout(r, 500));
    }

    // Käsittele harvest.json
    if (harvest.exists) {
        console.log('\n--- Harvest.json ---');
        for (let i = 0; i < harvest.resources.length; i++) {
            const resource = harvest.resources[i];

            // Suodata kategorian mukaan
            if (options.category && resource.category !== options.category) continue;

            // Suodata ID:n mukaan
            if (options.id && resource.id !== options.id) continue;

            const changes = await enrichResource(resource, options);

            if (changes) {
                Object.assign(harvest.resources[i], changes);
                harvestModified++;
            }

            // Pieni viive pyyntöjen välillä
            await new Promise(r => setTimeout(r, 500));
        }
    }

    // Tallenna muutokset
    console.log('\n--- Yhteenveto ---');
    console.log(`Resources.js: ${resourcesModified} muutettu`);
    console.log(`Harvest.json: ${harvestModified} muutettu`);

    if (options.dryRun) {
        console.log('\n⚠️  Dry run - muutoksia ei tallennettu');
    } else {
        if (resourcesModified > 0) {
            saveResources(resources, originalContent);
            console.log('✅ Resources.js tallennettu');
        }
        if (harvestModified > 0) {
            saveHarvest(harvest.resources);
            console.log('✅ Harvest.json tallennettu');
        }
    }
}

main().catch(console.error);
