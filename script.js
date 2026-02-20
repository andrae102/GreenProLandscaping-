// ================================
// GREENPRO LANDSCAPING - JAVASCRIPT
// ================================

// ================================
// Smooth Scrolling for Navigation Links
// ================================
document.querySelectorAll(‘a[href^=”#”]’).forEach(anchor => {
anchor.addEventListener(‘click’, function (e) {
const href = this.getAttribute(‘href’);
if (href !== ‘#’) {
e.preventDefault();
const target = document.querySelector(href);
if (target) {
target.scrollIntoView({
behavior: ‘smooth’,
block: ‘start’
});
}
}
});
});

// ================================
// Navbar Background on Scroll
// ================================
const navbar = document.querySelector(’.navbar’);
let lastScroll = 0;

window.addEventListener(‘scroll’, () => {
const currentScroll = window.pageYOffset;

```
if (currentScroll > 100) {
    navbar.style.boxShadow = '0 6px 30px rgba(34, 197, 94, 0.25)';
} else {
    navbar.style.boxShadow = '0 4px 24px rgba(34, 197, 94, 0.15)';
}

lastScroll = currentScroll;
```

});

// ================================
// Scroll Animations - Fade in elements
// ================================
const observerOptions = {
threshold: 0.1,
rootMargin: ‘0px 0px -100px 0px’
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = ‘1’;
entry.target.style.transform = ‘translateY(0)’;
}
});
}, observerOptions);

// Observe all service cards, gallery items, and contact cards
const animateOnScroll = document.querySelectorAll(’.service-card, .gallery-item, .contact-card, .showcase-img, .stat-box’);

animateOnScroll.forEach(element => {
element.style.opacity = ‘0’;
element.style.transform = ‘translateY(30px)’;
element.style.transition = ‘opacity 0.6s ease, transform 0.6s ease’;
observer.observe(element);
});

// ================================
// Service Card Interactive Effects
// ================================
const serviceCards = document.querySelectorAll(’.service-card’);

serviceCards.forEach(card => {
card.addEventListener(‘mouseenter’, function() {
this.style.boxShadow = ‘0 25px 60px rgba(34, 197, 94, 0.3)’;
});

```
card.addEventListener('mouseleave', function() {
    this.style.boxShadow = '';
});
```

});

// ================================
// Stats Counter Animation
// ================================
function animateCounter(element, target, duration = 2000) {
const start = 0;
const increment = target / (duration / 16);
let current = start;

```
const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
        element.textContent = formatStatNumber(target, element.dataset.suffix);
        clearInterval(timer);
    } else {
        element.textContent = Math.floor(current);
    }
}, 16);
```

}

function formatStatNumber(num, suffix = ‘’) {
return num + suffix;
}

// Observe stats and animate when visible
const statsObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting && !entry.target.dataset.animated) {
const targetText = entry.target.textContent.trim();

```
        // Extract number and suffix
        let targetNumber = parseInt(targetText.replace(/[^\d]/g, ''));
        let suffix = '';
        
        if (targetText.includes('+')) {
            suffix = '+';
        } else if (targetText.includes('%')) {
            suffix = '%';
        }
        
        // Store suffix for later
        entry.target.dataset.suffix = suffix;
        
        // Animate the counter
        animateCounter(entry.target, targetNumber, 2000);
        entry.target.dataset.animated = 'true';
    }
});
```

}, { threshold: 0.5 });

document.querySelectorAll(’.stat-number’).forEach(stat => {
statsObserver.observe(stat);
});

// ================================
// Gallery Image Lazy Loading Enhancement
// ================================
const galleryItems = document.querySelectorAll(’.gallery-item’);

galleryItems.forEach(item => {
item.addEventListener(‘click’, function() {
// Optional: Add lightbox functionality here
console.log(‘Gallery item clicked’);
});
});

// ================================
// Contact Card Click to Copy Phone
// ================================
const contactCards = document.querySelectorAll(’.contact-card’);

contactCards.forEach(card => {
const phoneLink = card.querySelector(‘a[href^=“tel:”]’);
if (phoneLink) {
phoneLink.addEventListener(‘click’, function(e) {
const phone = this.textContent.trim();
console.log(`Calling: ${phone}`);
});
}
});

// ================================
// Parallax Effect for Hero Background
// ================================
window.addEventListener(‘scroll’, () => {
const scrolled = window.pageYOffset;
const hero = document.querySelector(’.hero’);

```
if (hero && scrolled < window.innerHeight) {
    hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
}
```

});

// ================================
// Mobile Menu Toggle (if needed in future)
// ================================
const navbarToggler = document.querySelector(’.navbar-toggler’);
const navMenu = document.querySelector(’.nav-menu’);

if (navbarToggler) {
navbarToggler.addEventListener(‘click’, () => {
navMenu.classList.toggle(‘active’);
});
}

// ================================
// Image Loading Performance
// ================================
if (‘loading’ in HTMLImageElement.prototype) {
const images = document.querySelectorAll(‘img[loading=“lazy”]’);
images.forEach(img => {
img.src = img.dataset.src;
});
} else {
// Fallback for browsers that don’t support lazy loading
const script = document.createElement(‘script’);
script.src = ‘https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js’;
document.body.appendChild(script);
}

// ================================
// WhatsApp Float Button Analytics
// ================================
const whatsappFloat = document.querySelector(’.whatsapp-float’);

if (whatsappFloat) {
whatsappFloat.addEventListener(‘click’, function() {
console.log(‘WhatsApp button clicked’);
// Add analytics tracking here if needed
});
}

// ================================
// Smooth Page Load Animation
// ================================
window.addEventListener(‘load’, () => {
document.body.style.opacity = ‘0’;
document.body.style.transition = ‘opacity 0.5s ease’;

```
setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);
```

});

// ================================
// Console Welcome Message
// ================================
console.log(’%c🌿 GreenPro Landscaping’, ‘color: #22C55E; font-size: 24px; font-weight: bold;’);
console.log(’%cTransforming Outdoor Spaces Across Jamaica’, ‘color: #6B7280; font-size: 14px;’);
console.log(’%cWebsite loaded successfully ✓’, ‘color: #22C55E; font-size: 12px;’);
console.log(’%cBook via Phone: (876) 483-4938’, ‘color: #FB923C; font-size: 12px;’);
console.log(’%cBook via WhatsApp: (876) 483-4938’, ‘color: #25D366; font-size: 12px;’);

// ================================
// Performance Monitoring
// ================================
if (window.performance) {
window.addEventListener(‘load’, () => {
const perfData = window.performance.timing;
const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
console.log(`Page loaded in ${pageLoadTime}ms`);
});
}
