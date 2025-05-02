// =============== NEW NAVBAR TOGGLE ===============
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// =============== SKILLS ANIMATION ===============
const skillsSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.skill-progress');

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.width = `${value}%`;
    });
}

function hideProgress() {
    progressBars.forEach(progressBar => {
        progressBar.style.width = 0;
    });
}

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    
    if (sectionPos < screenPos) {
        showProgress();
    } else {
        hideProgress();
    }
});

// =============== SCROLL REVEAL ANIMATION ===============
const scrollRevealElements = document.querySelectorAll('.project-item, .education-item, .timeline-item');

function checkScroll() {
    scrollRevealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Apply initial styles for animations
scrollRevealElements.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'all 0.8s ease';
});

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// =============== CONTACT FORM SUBMIT ===============
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const formFields = Object.fromEntries(formData);
        
        // Here you would normally send the data to your backend
        console.log('Form submitted:', formFields);
        
        // Show success message
        contactForm.innerHTML = `
            <div class="text-center">
                <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Message Sent!</h3>
                <p>Thank you for contacting me. I'll get back to you soon.</p>
            </div>
        `;
    });
}

// =============== BACK TO TOP BUTTON ===============
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =============== SMOOTH SCROLLING FOR NAVIGATION ===============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// =============== TYPING ANIMATION ===============
const typingElement = document.querySelector('.hero-content h2');
const originalText = typingElement.textContent;
typingElement.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        typingElement.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});