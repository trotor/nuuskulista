const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const vm = require('vm');

const app = express();
const PORT = process.env.TRACKING_PORT || 3001;

// Load resources from resources.js
function loadResources() {
    try {
        const resourcesPath = path.join(__dirname, 'resources.js');
        const code = fs.readFileSync(resourcesPath, 'utf8');

        // Create a sandbox to run resources.js
        // Replace const/let with var to make variables global in sandbox context
        const sandbox = {};
        vm.createContext(sandbox);
        const modifiedCode = code
            .replace(/^const /gm, 'var ')
            .replace(/^let /gm, 'var ');
        vm.runInContext(modifiedCode, sandbox);

        return sandbox.resources || [];
    } catch (error) {
        console.error('Error loading resources:', error);
        return [];
    }
}

// Find resource by ID or slug
function findResource(identifier) {
    const resources = loadResources();

    // Try to find by ID first
    let resource = resources.find(r => r.id === identifier);
    if (resource) return resource;

    // Try to find by slug (title-based)
    const slug = identifier.toLowerCase();
    resource = resources.find(r => {
        const titleSlug = r.title
            .toLowerCase()
            .replace(/ä/g, 'a')
            .replace(/ö/g, 'o')
            .replace(/å/g, 'a')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
        return titleSlug === slug;
    });

    return resource;
}

// Category names in Finnish
const categoryNames = {
    podcast: 'Podcast',
    video: 'Video',
    article: 'Artikkeli',
    course: 'Kurssi',
    trainer: 'Kouluttaja',
    shop: 'Verkkokauppa',
    book: 'Kirja',
    other: 'Resurssi'
};

// Generate share page HTML with Open Graph meta tags
function generateSharePage(resource, baseUrl) {
    const siteTitle = 'Noutajalista';
    const categoryName = categoryNames[resource.category] || 'Resurssi';
    const title = `${resource.title} | ${siteTitle}`;
    const description = resource.description || `${categoryName} noutajakoirien koulutukseen`;
    const image = resource.image || `${baseUrl}/banner.png`;
    const pageUrl = `${baseUrl}/#${resource.id}`;

    return `<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(title)}</title>

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="${escapeHtml(pageUrl)}">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:image" content="${escapeHtml(image)}">
    <meta property="og:site_name" content="${siteTitle}">
    <meta property="og:locale" content="fi_FI">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${escapeHtml(image)}">

    <!-- Redirect to main page -->
    <meta http-equiv="refresh" content="0;url=${escapeHtml(pageUrl)}">
    <link rel="canonical" href="${escapeHtml(pageUrl)}">

    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: #f5f5f5;
        }
        .loading {
            text-align: center;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="loading">
        <p>Siirrytään sivulle...</p>
        <p><a href="${escapeHtml(pageUrl)}">Klikkaa tästä jos sivu ei avaudu automaattisesti</a></p>
    </div>
    <script>window.location.replace("${escapeJs(pageUrl)}");</script>
</body>
</html>`;
}

// HTML escape helper
function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// JS escape helper for inline scripts
function escapeJs(text) {
    if (!text) return '';
    return text
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/'/g, "\\'")
        .replace(/\n/g, '\\n');
}

// Initialize SQLite database
const db = new Database('tracking.db');

// Create tracking table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS clicks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    resource_url TEXT NOT NULL,
    resource_title TEXT,
    clicked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_agent TEXT,
    referer TEXT
  );

  CREATE INDEX IF NOT EXISTS idx_resource_url ON clicks(resource_url);
  CREATE INDEX IF NOT EXISTS idx_clicked_at ON clicks(clicked_at);
`);

// Middleware
app.use(express.json());

// CORS middleware - allow requests only from trusted origins
// SECURITY: Whitelist prevents competitors from sending fake tracking data
const ALLOWED_ORIGINS = [
  'https://noutajalista.fi',
  'https://www.noutajalista.fi',
  'https://muikea.fi',
  'https://www.muikea.fi',
  'http://localhost:3000',
  'http://localhost:8000'
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Simple rate limiting: max 20 requests per IP per minute
// SECURITY: Prevents bots from generating fake clicks
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 20; // Realistic: ~1 click per 3 seconds

function rateLimit(req, res, next) {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }

  const requests = rateLimitMap.get(ip);
  const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW);

  if (recentRequests.length >= MAX_REQUESTS) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);

  next();
}

// Clean up rate limit map periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, requests] of rateLimitMap.entries()) {
    const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW);
    if (recentRequests.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, recentRequests);
    }
  }
}, RATE_LIMIT_WINDOW);

// API Routes

// Share page with Open Graph meta tags
app.get('/r/:id', (req, res) => {
    const identifier = req.params.id;
    const resource = findResource(identifier);

    if (!resource) {
        // Resource not found, redirect to main page
        const baseUrl = `${req.protocol}://${req.get('host')}`;
        return res.redirect(302, baseUrl.replace(':3001', ''));
    }

    // Determine base URL (production vs development)
    let baseUrl = 'https://noutajalista.fi';
    const host = req.get('host');
    if (host.includes('localhost') || host.includes('muikea.fi')) {
        baseUrl = `${req.protocol}://${host.replace(':3001', '')}`;
    }

    const html = generateSharePage(resource, baseUrl);
    res.type('html').send(html);
});

// Track a click
app.post('/api/track', rateLimit, (req, res) => {
  const { resource_url, resource_title } = req.body;

  if (!resource_url) {
    return res.status(400).json({ error: 'resource_url is required' });
  }

  const user_agent = req.headers['user-agent'] || null;
  const referer = req.headers['referer'] || req.headers['referrer'] || null;

  try {
    const stmt = db.prepare(`
      INSERT INTO clicks (resource_url, resource_title, user_agent, referer)
      VALUES (?, ?, ?, ?)
    `);

    const result = stmt.run(resource_url, resource_title, user_agent, referer);

    res.json({
      success: true,
      id: result.lastInsertRowid
    });
  } catch (error) {
    console.error('Error tracking click:', error);
    res.status(500).json({ error: 'Failed to track click' });
  }
});

// Get statistics by resource
app.get('/api/stats', (req, res) => {
  try {
    const stmt = db.prepare(`
      SELECT
        resource_url,
        resource_title,
        COUNT(*) as click_count,
        MAX(clicked_at) as last_clicked
      FROM clicks
      GROUP BY resource_url
      ORDER BY click_count DESC
    `);

    const stats = stmt.all();
    res.json(stats);
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

// Get daily statistics
app.get('/api/stats/daily', (req, res) => {
  try {
    const stmt = db.prepare(`
      SELECT
        DATE(clicked_at) as date,
        COUNT(*) as click_count,
        COUNT(DISTINCT resource_url) as unique_resources
      FROM clicks
      GROUP BY DATE(clicked_at)
      ORDER BY date DESC
      LIMIT 30
    `);

    const stats = stmt.all();
    res.json(stats);
  } catch (error) {
    console.error('Error fetching daily stats:', error);
    res.status(500).json({ error: 'Failed to fetch daily stats' });
  }
});

// Get total click count
app.get('/api/stats/total', (req, res) => {
  try {
    const stmt = db.prepare(`
      SELECT COUNT(*) as total_clicks
      FROM clicks
    `);

    const result = stmt.get();
    res.json(result);
  } catch (error) {
    console.error('Error fetching total:', error);
    res.status(500).json({ error: 'Failed to fetch total' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down gracefully...');
  db.close();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\nShutting down gracefully...');
  db.close();
  process.exit(0);
});

// Start server
app.listen(PORT, () => {
  console.log(`Tracking server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`Stats API: http://localhost:${PORT}/api/stats`);
});
