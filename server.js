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
        // Parsitaan resources.js
        const lastUpdatedMatch = content.match(/const lastUpdated = "([^"]+)"/);
        const resourcesMatch = content.match(/const resources = \[([\s\S]*)\];/);

        if (resourcesMatch) {
            // Eval on turvallinen tässä koska luemme omaa tiedostoamme
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
        url: ${JSON.stringify(r.url)}
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

app.listen(PORT, () => {
    console.log(`\n🐕 Nuuskulista Admin`);
    console.log(`   http://localhost:${PORT}/admin.html\n`);
});
