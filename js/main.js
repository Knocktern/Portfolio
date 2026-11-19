// ==========================================
// COMPACT PORTFOLIO — projects + image viewer
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initFilters();
    initViewer();
    initAvatarFallback();
});

const escapeHTML = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));

// ========== Projects (from data/projects.json) ==========
async function loadProjects() {
    const grid = document.getElementById('projectsGrid');
    try {
        const res = await fetch('data/projects.json');
        if (!res.ok) throw new Error(res.status);
        const projects = await res.json();
        grid.innerHTML = projects.map(projectCard).join('');
    } catch (err) {
        console.error('Error loading projects:', err);
        grid.innerHTML = '<p class="project">Projects could not be loaded. See <a href="https://github.com/Knocktern" target="_blank" rel="noopener">github.com/Knocktern</a>.</p>';
    }
}

function projectCard(p) {
    const tags = p.tech.slice(0, 5).map(t => `<span>${escapeHTML(t)}</span>`).join('');
    const award = p.achievement ? `<span class="award-note">${escapeHTML(p.achievement)}</span>` : '';
    const live = p.live
        ? `<a href="${escapeHTML(p.live)}" target="_blank" rel="noopener"><i class="fas fa-arrow-up-right-from-square"></i>Live</a>`
        : '';
    return `
        <article class="project" data-category="${escapeHTML(p.category)}">
            <div class="project-top">
                <h3><a href="${escapeHTML(p.github)}" target="_blank" rel="noopener">${escapeHTML(p.name)}</a></h3>
                <span class="project-cat">${p.category === 'Machine Learning' ? 'ML' : escapeHTML(p.category)}</span>
            </div>
            <p>${escapeHTML(p.summary || p.tagline)}</p>
            ${award}
            <div class="tags">${tags}</div>
            <div class="project-links">
                <a href="${escapeHTML(p.github)}" target="_blank" rel="noopener"><i class="fab fa-github"></i>Code</a>
                ${live}
            </div>
        </article>`;
}

function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.toggle('active', b === btn));
        const filter = btn.dataset.filter;
        document.querySelectorAll('.project').forEach(card => {
            card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
        });
    }));
}

// ========== Image viewer for award photos ==========
function initViewer() {
    const viewer = document.getElementById('viewer');
    if (!viewer || typeof viewer.showModal !== 'function') return;
    const img = viewer.querySelector('img');

    document.querySelectorAll('[data-full]').forEach(el => el.addEventListener('click', () => {
        img.src = el.dataset.full;
        img.alt = el.getAttribute('aria-label') || '';
        viewer.showModal();
    }));

    viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
    viewer.addEventListener('click', e => { if (e.target === viewer) viewer.close(); });
}

// ========== Avatar fallback ==========
function initAvatarFallback() {
    const avatar = document.getElementById('profileImage');
    if (!avatar) return;
    avatar.addEventListener('error', () => {
        avatar.src = 'data:image/svg+xml,' + encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#4f46e5"/>' +
            '<text x="50" y="62" font-family="Inter,sans-serif" font-size="36" font-weight="700" fill="#fff" text-anchor="middle">AS</text></svg>'
        );
    }, { once: true });
}
