// ==========================================
// MODERN PORTFOLIO - MAIN JAVASCRIPT
// ==========================================

// ========== Initialize on DOM Load ==========
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeScrollAnimations();
    loadProjects();
    initializeProjectFilters();
    initializeSmoothScroll();
    initializeScrollProgress();
    initializeTypingEffect();
});

// ========== Navigation ==========
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ========== Scroll Animations (Reveal on Scroll) ==========
function initializeScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100 && elementBottom > 0) {
                element.classList.add('active');
            }
        });
    };
    
    // Initial check
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
}

// ========== Load Projects from JSON ==========
async function loadProjects() {
    try {
        const response = await fetch('data/projects.json');
        const projects = await response.json();
        displayProjects(projects);
        window.allProjects = projects; // Store globally for filtering
    } catch (error) {
        console.error('Error loading projects:', error);
        document.getElementById('projectsGrid').innerHTML = 
            '<p style="text-align: center; color: var(--text-secondary);">Failed to load projects. Please refresh the page.</p>';
    }
}

// ========== Display Projects ==========
function displayProjects(projects) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectCard.classList.add('reveal-stagger');
        projectsGrid.appendChild(projectCard);
        
        // Trigger animation after a short delay
        setTimeout(() => {
            projectCard.classList.add('active');
        }, index * 100);
    });
}

// ========== Create Project Card ==========
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card filtered-in`;
    card.dataset.category = project.category;
    
    // Limit features to first 3
    const featuresHTML = project.features.slice(0, 3).map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    // Build tech tags
    const techHTML = project.tech.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    // Achievement badge if exists
    const achievementHTML = project.achievement ? 
        `<div class="project-achievement">${project.achievement}</div>` : '';
    
    card.innerHTML = `
        <div class="project-header">
            <span class="project-category">${project.category}</span>
            <h3 class="project-name">${project.name}</h3>
            <p class="project-tagline">${project.tagline}</p>
        </div>
        <div class="project-body">
            <p class="project-description">${project.description}</p>
            <div class="project-tech">${techHTML}</div>
            <div class="project-features">
                <h4>Key Features:</h4>
                <ul>${featuresHTML}</ul>
            </div>
            ${achievementHTML}
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="project-link link-github">
                    <i class="fab fa-github"></i> View Code
                </a>
                ${project.live ? `
                    <a href="${project.live}" target="_blank" class="project-link link-live">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// ========== Project Filtering ==========
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Get filter value
            const filterValue = button.dataset.filter;
            
            // Filter projects
            filterProjects(filterValue);
        });
    });
}

function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    const normalizedFilter = String(category || '').trim().toLowerCase();
    
    projectCards.forEach(card => {
        const projectCategory = String(card.dataset.category || '').trim().toLowerCase();
        const isMatch = normalizedFilter === 'all' || projectCategory === normalizedFilter;

        if (isMatch) {
            card.style.display = '';
            card.classList.remove('filtered-out');
            card.classList.add('filtered-in');
        } else {
            card.style.display = 'none';
            card.classList.add('filtered-out');
            card.classList.remove('filtered-in');
        }
    });
}

// ========== Smooth Scroll ==========
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== Scroll Progress Bar ==========
function initializeScrollProgress() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    // Update progress on scroll
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
        progressBar.style.width = `${scrollPercentage}%`;
    });
}

// ========== Typing Effect for Hero Title ==========
function initializeTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;

    const phrasesRaw = (typingText.getAttribute('data-phrases') || '').trim();
    const phrases = phrasesRaw
        ? phrasesRaw.split('|').map(p => p.trim()).filter(Boolean)
        : [typingText.textContent.trim()].filter(Boolean);

    if (phrases.length === 0) return;

    const typeSpeed = 60;
    const deleteSpeed = 35;
    const pauseAfterType = 1200;
    const pauseAfterDelete = 250;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    typingText.textContent = '';

    const tick = () => {
        const currentPhrase = phrases[phraseIndex];

        if (!isDeleting) {
            typingText.textContent = currentPhrase.slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(tick, pauseAfterType);
                return;
            }

            setTimeout(tick, typeSpeed);
            return;
        }

        typingText.textContent = currentPhrase.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex <= 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(tick, pauseAfterDelete);
            return;
        }

        setTimeout(tick, deleteSpeed);
    };

    // Start typing after hero animation
    setTimeout(tick, 800);
}

// ========== Parallax Effect for Hero Background ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.2);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========== Cursor Effect (Optional - Advanced) ==========
function initializeCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add cursor grow effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-grow'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-grow'));
    });
}

// Uncomment to enable cursor effect
// initializeCursorEffect();

// ========== Image Lazy Loading ==========
document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.getElementById('profileImage');
    
    // Handle image load error (placeholder not found)
    if (profileImage) {
        profileImage.addEventListener('error', () => {
            // Create a gradient placeholder
            const wrapper = profileImage.parentElement;
            wrapper.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            wrapper.style.display = 'flex';
            wrapper.style.alignItems = 'center';
            wrapper.style.justifyContent = 'center';
            
            // Add initials
            const initials = document.createElement('div');
            initials.textContent = 'AS';
            initials.style.fontSize = '100px';
            initials.style.fontWeight = '700';
            initials.style.color = 'white';
            wrapper.appendChild(initials);
            
            profileImage.style.display = 'none';
        });
    }
});

// ========== Form Validation (if contact form is added later) ==========
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ========== Utility Functions ==========

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttle to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll event handlers here
}, 100));

// ========== Console Easter Egg ==========
console.log('%c👋 Hello, curious developer!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cLike what you see? Let\'s connect!', 'font-size: 14px; color: #6b7280;');
console.log('%c📧 asakib223519@bscse.uiu.ac.bd', 'font-size: 12px; color: #14b8a6;');
console.log('%c🔗 github.com/Knocktern', 'font-size: 12px; color: #14b8a6;');

// ========== Performance Monitoring ==========
window.addEventListener('load', () => {
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`%c⚡ Page loaded in ${(pageLoadTime / 1000).toFixed(2)}s`, 
            'font-size: 12px; color: #10b981;');
    }
});

// ========== Export functions if needed ==========
window.portfolioApp = {
    filterProjects,
    loadProjects,
    validateEmail
};
