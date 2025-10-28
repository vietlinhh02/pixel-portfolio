// ===== PIXEL PORTFOLIO - SINGLE PAGE SCRIPT =====

// Smooth scroll function
function smoothScroll(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        updateActiveNav(sectionId);
    }
}

// Update active nav link
function updateActiveNav(sectionId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId || 
            link.getAttribute('onclick')?.includes(sectionId)) {
            link.classList.add('active');
        }
    });
}

// Smooth scroll on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    if (current) updateActiveNav(current);
});

// Animate numbers (hero stats)
function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-number[data-target]');
    
    numbers.forEach(element => {
        const target = parseInt(element.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 50);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 50);
    });
}

// Contact form handler
document.addEventListener('DOMContentLoaded', () => {
    // Animate numbers on page load
    animateNumbers();
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contactName').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;
            
            // Create mailto link
            const mailtoLink = `mailto:nvlinh0607@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('From: ' + name + '\n\n' + message)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Reset form after a short delay
            setTimeout(() => {
                this.reset();
            }, 500);
            
            this.reset();
        });
    }

    // Theme toggling
    const themes = [
        { key: 'sky-blue', label: 'THEME: SKY' },
        { key: 'purple-gold', label: 'THEME: PURPLE' },
        { key: 'green-cyan', label: 'THEME: GREEN' },
        { key: 'orange-purple', label: 'THEME: ORANGE' },
        { key: 'cyberpunk', label: 'THEME: CYBER' },
        { key: 'forest', label: 'THEME: FOREST' },
    ];
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('pp-theme') || 'sky-blue';
    document.body.dataset.theme = savedTheme;

    function setThemeByKey(key) {
        document.body.dataset.theme = key;
        localStorage.setItem('pp-theme', key);
        if (themeToggle) {
            const t = themes.find(t => t.key === key);
            themeToggle.textContent = `[ ${t?.label || 'THEME'} ]`;
        }
    }

    setThemeByKey(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentKey = document.body.dataset.theme || themes[0].key;
            const idx = themes.findIndex(t => t.key === currentKey);
            const next = themes[(idx + 1) % themes.length];
            setThemeByKey(next.key);
        });
    }
});

// Download CV function
function downloadCV() {
    alert('[ CV DOWNLOAD ]\n\nDownload feature would be implemented here.\n\nFor now, you can customize this behavior.');
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Home
    if (e.key === '1') smoothScroll(e, 'hero');
    // Projects
    if (e.key === '2') smoothScroll(e, 'projects');
    // About
    if (e.key === '3') smoothScroll(e, 'about');
    // Stats
    if (e.key === '4') smoothScroll(e, 'stats');
    // Contact
    if (e.key === '5') smoothScroll(e, 'contact');
});

console.log(`
╔════════════════════════════════════════╗
║     WELCOME TO DEV.PIXEL PORTFOLIO    ║
║                                        ║
║  🎮 Made with pixels and passion 🎮  ║
║  Press 1-5 for quick navigation      ║
║  Check the code on GitHub!           ║
╚════════════════════════════════════════╝
`);
