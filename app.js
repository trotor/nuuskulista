// Current filter state
let currentCategory = 'all';
let currentLanguage = 'all';
let currentSort = 'default';

// Generate URL-safe slug from text
function generateSlug(text) {
    return text
        .toLowerCase()
        .replace(/ä/g, 'a')
        .replace(/ö/g, 'o')
        .replace(/å/g, 'a')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

// Render resources on page load
document.addEventListener('DOMContentLoaded', function() {
    renderResources();
    document.getElementById('last-updated').textContent = lastUpdated;

    // Category filter buttons
    const categoryButtons = document.querySelectorAll('.filter-btn[data-category]');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            renderResources();
        });
    });

    // Language filter buttons
    const langButtons = document.querySelectorAll('.filter-btn[data-language]');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentLanguage = this.dataset.language;
            renderResources();
        });
    });

    // Sort buttons
    const sortButtons = document.querySelectorAll('.filter-btn[data-sort]');
    sortButtons.forEach(button => {
        button.addEventListener('click', function() {
            sortButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentSort = this.dataset.sort;
            renderResources();
        });
    });

    // Help popup functionality
    const helpPopup = document.getElementById('help-popup');
    const openHelpBtn = document.getElementById('open-help');
    const headerHelpBtn = document.getElementById('header-help-btn');
    const closeHelpBtn = document.getElementById('close-popup');

    openHelpBtn.addEventListener('click', () => helpPopup.classList.add('active'));
    headerHelpBtn.addEventListener('click', () => helpPopup.classList.add('active'));
    closeHelpBtn.addEventListener('click', () => helpPopup.classList.remove('active'));
    helpPopup.addEventListener('click', (e) => {
        if (e.target === helpPopup) helpPopup.classList.remove('active');
    });

    // Glossary popup functionality
    const glossaryPopup = document.getElementById('glossary-popup');
    const openGlossaryBtn = document.getElementById('open-glossary');
    const closeGlossaryBtn = document.getElementById('close-glossary');

    openGlossaryBtn.addEventListener('click', () => glossaryPopup.classList.add('active'));
    closeGlossaryBtn.addEventListener('click', () => glossaryPopup.classList.remove('active'));
    glossaryPopup.addEventListener('click', (e) => {
        if (e.target === glossaryPopup) glossaryPopup.classList.remove('active');
    });

    // Handle hash routing for sharing individual resources
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
});

function renderResources() {
    const container = document.getElementById('resources-container');
    const featuredSection = document.getElementById('featured-section');
    const featuredContainer = document.getElementById('featured-container');

    container.innerHTML = '';
    featuredContainer.innerHTML = '';

    let filteredResources = resources;

    // Filter by category
    if (currentCategory !== 'all') {
        filteredResources = filteredResources.filter(r => r.category === currentCategory);
    }

    // Filter by language
    if (currentLanguage !== 'all') {
        if (currentLanguage === 'other') {
            filteredResources = filteredResources.filter(r =>
                r.language !== 'Suomi' && r.language !== 'Englanti'
            );
        } else {
            filteredResources = filteredResources.filter(r => r.language === currentLanguage);
        }
    }

    // Sort resources
    if (currentSort === 'alpha-asc') {
        filteredResources = [...filteredResources].sort((a, b) =>
            a.title.localeCompare(b.title, 'fi')
        );
    } else if (currentSort === 'alpha-desc') {
        filteredResources = [...filteredResources].sort((a, b) =>
            b.title.localeCompare(a.title, 'fi')
        );
    }

    if (filteredResources.length === 0) {
        featuredSection.style.display = 'none';
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">Ei resursseja näillä suodattimilla.</p>';
        return;
    }

    // Separate featured and regular resources
    const featuredResources = filteredResources.filter(r => r.featured);
    const regularResources = filteredResources.filter(r => !r.featured);

    // Render featured section
    if (featuredResources.length > 0) {
        featuredSection.style.display = 'block';
        featuredResources.forEach(resource => {
            const card = createResourceCard(resource);
            featuredContainer.appendChild(card);
        });
    } else {
        featuredSection.style.display = 'none';
    }

    // Render regular resources
    regularResources.forEach(resource => {
        const card = createResourceCard(resource);
        container.appendChild(card);
    });
}

function createResourceCard(resource) {
    const card = document.createElement('div');
    card.className = 'resource-card' + (resource.featured ? ' featured' : '');

    // Generate unique ID for this resource
    const resourceId = generateSlug(resource.title);
    card.setAttribute('data-resource-id', resourceId);

    const categoryLabel = getCategoryLabel(resource.category);
    const flag = getLanguageFlag(resource.language);

    // Build header with image background
    const imageStyle = resource.image ? `background-image: url('${resource.image}')` : '';
    const hasImageClass = resource.image ? 'has-image' : 'no-image';

    // Build link HTML only if URL exists
    const linkHtml = resource.url
        ? `<a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="resource-link">Avaa resurssi →</a>`
        : '';

    // Build location HTML if exists
    const locationHtml = resource.location
        ? `<span class="resource-location">📍 ${resource.location}</span>`
        : '';

    card.innerHTML = `
        <div class="resource-header ${hasImageClass}" style="${imageStyle}">
            <button class="share-btn" title="Kopioi linkki tähän resurssiin">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                </svg>
            </button>
            <div class="resource-header-overlay">
                <h3>${resource.title}</h3>
                <div class="resource-meta-row">
                    <span class="resource-category cat-${resource.category}">${categoryLabel}</span>
                    <span class="resource-language">${flag} ${resource.language}</span>
                    ${locationHtml}
                </div>
            </div>
        </div>
        <div class="resource-content">
            <p class="resource-desc">${resource.description}</p>
            ${linkHtml}
        </div>
    `;

    // Click to expand description
    const desc = card.querySelector('.resource-desc');
    desc.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });

    // Track resource link clicks
    const resourceLink = card.querySelector('.resource-link');
    if (resourceLink) {
        resourceLink.addEventListener('click', function() {
            trackResourceClick(resource.url, resource.title);
        });
    }

    // Share button functionality
    const shareBtn = card.querySelector('.share-btn');
    shareBtn.addEventListener('click', async function(e) {
        e.preventDefault();
        const shareUrl = `${window.location.origin}${window.location.pathname}#${resourceId}`;

        try {
            await navigator.clipboard.writeText(shareUrl);
            // Show success feedback with checkmark
            const originalText = this.innerHTML;
            this.classList.add('copied');
            this.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            `;
            setTimeout(() => {
                this.classList.remove('copied');
                this.innerHTML = originalText;
            }, 2000);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = shareUrl;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            const originalText = this.innerHTML;
            this.classList.add('copied');
            this.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            `;
            setTimeout(() => {
                this.classList.remove('copied');
                this.innerHTML = originalText;
            }, 2000);
        }
    });

    return card;
}

function getLanguageFlag(language) {
    const flags = {
        'Suomi': '🇫🇮',
        'Englanti': '🇬🇧',
        'Saksa': '🇩🇪',
        'Ruotsi': '🇸🇪'
    };
    return flags[language] || '🌐';
}

function getCategoryLabel(category) {
    const labels = {
        'podcast': 'Podcast',
        'video': 'Video',
        'article': 'Artikkeli',
        'course': 'Kurssi',
        'trainer': 'Kouluttaja',
        'shop': 'Verkkokauppa',
        'book': 'Kirja',
        'other': 'Muu'
    };
    return labels[category] || category;
}

function handleHashChange() {
    const hash = window.location.hash.slice(1); // Remove # prefix
    if (!hash) return;

    // Wait a bit for cards to render
    setTimeout(() => {
        const targetCard = document.querySelector(`[data-resource-id="${hash}"]`);
        if (targetCard) {
            // Remove previous highlights
            document.querySelectorAll('.resource-card.highlighted').forEach(card => {
                card.classList.remove('highlighted');
            });

            // Scroll to card and highlight it
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            targetCard.classList.add('highlighted');

            // Remove highlight after 10 seconds
            setTimeout(() => {
                targetCard.classList.remove('highlighted');
            }, 10000);
        }
    }, 100);
}

// Click tracking functionality
function getTrackingApiUrl() {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;

    // Localhost development
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return 'http://localhost:3001/api/track';
    }

    // If running in subdirectory (e.g., muikea.fi/noutajalista/)
    if (pathname.startsWith('/noutajalista')) {
        return '/noutajalista/api/track';
    }

    // Production (noutajalista.fi)
    return '/api/track';
}

const TRACKING_API_URL = getTrackingApiUrl();

function trackResourceClick(resourceUrl, resourceTitle) {
    // Send tracking request (fire and forget - don't block user navigation)
    fetch(TRACKING_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            resource_url: resourceUrl,
            resource_title: resourceTitle
        }),
        // Don't wait for response
        keepalive: true
    }).catch(err => {
        // Silently fail - tracking should never break user experience
        console.debug('Tracking failed:', err);
    });
}
