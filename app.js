// Render resources on page load
document.addEventListener('DOMContentLoaded', function() {
    renderResources('all');
    document.getElementById('last-updated').textContent = lastUpdated;

    // Add filter button event listeners
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Filter resources
            const category = this.dataset.category;
            renderResources(category);
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

function renderResources(category) {
    const container = document.getElementById('resources-container');
    container.innerHTML = '';

    const filteredResources = category === 'all'
        ? resources
        : resources.filter(resource => resource.category === category);

    if (filteredResources.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">Ei resursseja tässä kategoriassa.</p>';
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

    card.innerHTML = `
        <span class="resource-category">${categoryLabel}</span>
        <h3>${resource.title}</h3>
        <span class="resource-language">${resource.language}</span>
        <p>${resource.description}</p>
        <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="resource-link">
            Avaa resurssi →
        </a>
    `;

    return card;
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
