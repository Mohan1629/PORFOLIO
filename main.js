// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Image Slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    
    // Calculate next slide index
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add active class to next slide
    slides[currentSlide].classList.add('active');
}

// Start the slider
setInterval(nextSlide, 3000);

// Scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .research-card, .publication-card, .contact-item').forEach(element => {
    observer.observe(element);
});

// Add animation on scroll
const observerOptions2 = {
    threshold: 0.1
};

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions2);

document.querySelectorAll('.section-title, .tech-category, .info-item').forEach(el => {
    observer2.observe(el);
});

// Navigation background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animate elements on scroll
// Removed existing observer code to avoid duplication

// Add font and color styles
document.body.style.fontFamily = 'Montserrat, sans-serif'; // Montserrat font
document.body.style.color = '#333333'; // Dark gray text color
document.body.style.backgroundColor = '#f7f7f7'; // Light gray background

// Add styles to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.style.color = '#ffffff'; // White text color
    link.style.textDecoration = 'none';
    link.style.transition = 'color 0.2s ease';
});

document.querySelectorAll('nav a:hover').forEach(link => {
    link.style.color = '#cccccc'; // Light gray hover color
});