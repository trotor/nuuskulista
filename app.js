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

    card.innerHTML = `
        <span class="resource-category">${categoryLabel}</span>
        <h3>${resource.title}</h3>
        <span class="resource-language">${flag} ${resource.language}</span>
        <p>${resource.description}</p>
        <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="resource-link">
            Avaa resurssi →
        </a>
    `;

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
        'other': 'Muu'
    };
    return labels[category] || category;
}
