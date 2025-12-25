// Current filter state
let currentCategory = 'all';
let currentLanguage = 'all';

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

    // Popup functionality
    const popup = document.getElementById('help-popup');
    const openBtn = document.getElementById('open-help');
    const closeBtn = document.getElementById('close-popup');

    openBtn.addEventListener('click', () => popup.classList.add('active'));
    closeBtn.addEventListener('click', () => popup.classList.remove('active'));
    popup.addEventListener('click', (e) => {
        if (e.target === popup) popup.classList.remove('active');
    });
});

function renderResources() {
    const container = document.getElementById('resources-container');
    container.innerHTML = '';

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

    if (filteredResources.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">Ei resursseja näillä suodattimilla.</p>';
        return;
    }

    filteredResources.forEach(resource => {
        const card = createResourceCard(resource);
        container.appendChild(card);
    });
}

function createResourceCard(resource) {
    const card = document.createElement('div');
    card.className = 'resource-card';

    const categoryLabel = getCategoryLabel(resource.category);
    const flag = getLanguageFlag(resource.language);

    // Build header with image background
    const imageStyle = resource.image ? `background-image: url('${resource.image}')` : '';
    const hasImageClass = resource.image ? 'has-image' : 'no-image';

    // Build link HTML only if URL exists
    const linkHtml = resource.url
        ? `<a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="resource-link">Avaa resurssi →</a>`
        : '';

    card.innerHTML = `
        <div class="resource-header ${hasImageClass}" style="${imageStyle}">
            <div class="resource-header-overlay">
                <h3>${resource.title}</h3>
                <div class="resource-meta-row">
                    <span class="resource-category cat-${resource.category}">${categoryLabel}</span>
                    <span class="resource-language">${flag} ${resource.language}</span>
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
