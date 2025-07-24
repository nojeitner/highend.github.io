// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Super Secret Cheeseburger Easter Egg
    let clickCount = 0;
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        footerText.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 7) {
                // Create the secret burger
                const burgerDiv = document.createElement('div');
                burgerDiv.innerHTML = `
                    <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                         background: rgba(0,0,0,0.9); padding: 2rem; border-radius: 15px; 
                         border: 2px solid #3cd2d1; z-index: 9999; text-align: center; 
                         color: #3cd2d1; animation: burgerFade 0.5s ease-in;">
                        <h2 style="margin: 0 0 1rem 0; color: #3cd2d1;">🍔 SECRET DISCOVERED! 🍔</h2>
                        <p style="font-size: 3rem; margin: 1rem 0; animation: spin 2s linear infinite;">🍔</p>
                        <p>You found the legendary cheeseburger!</p>
                        <p style="font-size: 0.8rem; color: #a0a0a0;">Achievement: Master Detective</p>
                        <button onclick="this.parentElement.parentElement.remove()" 
                                style="background: #3cd2d1; color: #000; border: none; 
                                       padding: 0.5rem 1rem; border-radius: 5px; margin-top: 1rem; cursor: pointer;">
                            Close
                        </button>
                    </div>
                    <style>
                        @keyframes burgerFade { from { opacity: 0; transform: translate(-50%, -50%) scale(0.5); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
                        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    </style>
                `;
                document.body.appendChild(burgerDiv);
                clickCount = 0; // Reset
            }
        });
    }
});

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const faqCategories = document.querySelectorAll('.faq-category');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Remove active class from all tabs and categories
            tabBtns.forEach(tab => tab.classList.remove('active'));
            faqCategories.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding category
            this.classList.add('active');
            document.getElementById(category).classList.add('active');
        });
    });
    
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const privacy = document.getElementById('privacy').checked;
            
            if (!name || !email || !message || !privacy) {
                alert('Bitte füllen Sie alle Pflichtfelder aus und stimmen Sie der Datenschutzerklärung zu.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Wird gesendet...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});

// Intersection Observer for Animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards and sections for animation
    const animatedElements = document.querySelectorAll('.team-card, .news-card, .mission-card, .achievement-card, .member-card, .contact-card, .faq-item, .legal-section');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Navbar Background on Scroll
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
});

// Parallax Effect for Hero Section
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            hero.style.transform = `translateY(${parallax}px)`;
        });
    }
});

// Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen if you have one
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000);
    }
    
    // Animate elements on page load
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (heroImage) {
        setTimeout(() => {
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateY(0)';
        }, 600);
    }
});

// Search Functionality (if needed later)
function searchContent(query) {
    const searchResults = [];
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');
    
    textElements.forEach(element => {
        if (element.textContent.toLowerCase().includes(query.toLowerCase())) {
            searchResults.push({
                element: element,
                text: element.textContent,
                page: window.location.pathname
            });
        }
    });
    
    return searchResults;
}

// Theme Toggle (for future dark/light mode)
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

// Initialize theme from localStorage
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
});

// Console welcome message
console.log(`
🎮 HighEnd eSports Website
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Willkommen zur HighEnd eSports Website!
Diese Website wurde mit modernen Web-Technologien erstellt.

Entwickelt für GitHub Pages
Optimiert für alle Endgeräte
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);

// Error handling for missing elements
document.addEventListener('DOMContentLoaded', function() {
    // Check for essential elements and log warnings if missing
    const essentialElements = [
        '.navbar',
        '.hero',
        'footer'
    ];
    
    essentialElements.forEach(selector => {
        if (!document.querySelector(selector)) {
            console.warn(`Essential element missing: ${selector}`);
        }
    });
});
