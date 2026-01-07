const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const PORT = process.env.TRACKING_PORT || 3001;

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

// CORS middleware - allow requests from any origin
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Simple rate limiting: max 100 requests per IP per minute
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 100;

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
