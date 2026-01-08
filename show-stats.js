#!/usr/bin/env node

/**
 * CLI tool to view tracking statistics
 * Usage: node show-stats.js [--live]
 */

const Database = require('better-sqlite3');
const path = require('path');

// Check if we're running against remote server
const args = process.argv.slice(2);
const isLive = args.includes('--live');
const isRemote = args.includes('--remote');

let API_BASE = 'http://localhost:3001/api';

if (isLive) {
  API_BASE = 'https://muikea.fi/noutajalista/api';
} else if (isRemote) {
  const remoteUrl = args[args.indexOf('--remote') + 1];
  if (remoteUrl) {
    API_BASE = remoteUrl;
  }
}

// Colors for terminal
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
};

function printHeader(text) {
  console.log('\n' + colors.bright + colors.cyan + text + colors.reset);
  console.log('─'.repeat(text.length));
}

function printStats(stats, total) {
  printHeader('📊 Klikkausstatistiikka');

  console.log(`\n${colors.bright}Kokonaisklikkaukset:${colors.reset} ${colors.green}${total.total_clicks.toLocaleString('fi')}${colors.reset}`);
  console.log(`${colors.bright}Eri resursseja:${colors.reset} ${colors.green}${stats.length}${colors.reset}\n`);

  if (stats.length === 0) {
    console.log(colors.dim + 'Ei vielä klikkauksia.' + colors.reset);
    return;
  }

  printHeader('🏆 Suosituimmat resurssit');
  console.log('');

  // Table header
  console.log(
    colors.bright +
    '  # ' +
    'Otsikko'.padEnd(40) +
    'Klikkaukset'.padEnd(15) +
    'Viimeksi' +
    colors.reset
  );
  console.log('─'.repeat(100));

  // Top 20 resources
  stats.slice(0, 20).forEach((stat, index) => {
    const rank = (index + 1).toString().padStart(3);
    const title = (stat.resource_title || 'Ei otsikkoa').substring(0, 38).padEnd(40);
    const clicks = stat.click_count.toString().padStart(3).padEnd(15);
    const lastClicked = new Date(stat.last_clicked).toLocaleString('fi', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    const rankColor = index === 0 ? colors.yellow : index < 3 ? colors.cyan : colors.dim;

    console.log(
      rankColor + rank + colors.reset + ' ' +
      title +
      colors.green + clicks + colors.reset +
      colors.dim + lastClicked + colors.reset
    );
  });

  if (stats.length > 20) {
    console.log(colors.dim + `\n... ja ${stats.length - 20} muuta resurssia` + colors.reset);
  }

  console.log('');
}

async function fetchRemoteStats() {
  try {
    const fetch = (await import('node-fetch')).default;

    console.log(colors.dim + `Haetaan tilastoja: ${API_BASE}` + colors.reset);

    const [statsRes, totalRes] = await Promise.all([
      fetch(`${API_BASE}/stats`),
      fetch(`${API_BASE}/stats/total`)
    ]);

    if (!statsRes.ok || !totalRes.ok) {
      throw new Error(`HTTP ${statsRes.status}: ${statsRes.statusText}`);
    }

    const stats = await statsRes.json();
    const total = await totalRes.json();

    printStats(stats, total);
  } catch (error) {
    console.error(colors.bright + colors.yellow + '\n⚠️  Virhe tilastojen haussa:' + colors.reset, error.message);
    console.error(colors.dim + '\nVarmista että tracking-serveri on käynnissä:' + colors.reset);
    console.error(colors.dim + '  npm run tracking' + colors.reset);
    process.exit(1);
  }
}

function readLocalStats() {
  const dbPath = path.join(__dirname, 'tracking.db');

  try {
    const db = new Database(dbPath, { readonly: true });

    const stats = db.prepare(`
      SELECT
        resource_url,
        resource_title,
        COUNT(*) as click_count,
        MAX(clicked_at) as last_clicked
      FROM clicks
      GROUP BY resource_url
      ORDER BY click_count DESC
    `).all();

    const total = db.prepare(`
      SELECT COUNT(*) as total_clicks FROM clicks
    `).get();

    db.close();

    printStats(stats, total);
  } catch (error) {
    if (error.code === 'SQLITE_CANTOPEN') {
      console.error(colors.bright + colors.yellow + '\n⚠️  Tietokantaa ei löydy:' + colors.reset, dbPath);
      console.error(colors.dim + '\nEi vielä klikkauksia tai tracking-serveri ei ole käynnissä.' + colors.reset);
      process.exit(1);
    }
    throw error;
  }
}

// Print usage if help requested
if (args.includes('--help') || args.includes('-h')) {
  console.log(`
${colors.bright}Käyttö:${colors.reset}
  node show-stats.js              Näytä paikalliset tilastot (tracking.db)
  node show-stats.js --live       Hae tilastot tuotannosta (muikea.fi)
  node show-stats.js --remote URL Hae tilastot omasta API:sta

${colors.bright}Esimerkit:${colors.reset}
  node show-stats.js
  node show-stats.js --live
  node show-stats.js --remote https://noutajalista.fi/api
  `);
  process.exit(0);
}

// Main execution
if (isLive || isRemote) {
  fetchRemoteStats();
} else {
  readLocalStats();
}
