// =============== NEW NAVBAR TOGGLE ===============
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Remove focus from logo after click to prevent it staying "active" on mobile
const logo = document.querySelector('.logo');
if (logo) {
  logo.addEventListener('click', function () {
    this.blur();
  });
}

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 918) {
        navMenu.classList.remove('active');
      }
    });
  });

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
  
    // If menu is open and click is outside both menu and hamburger
    if (
      navMenu.classList.contains('active') &&
      !navMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      navMenu.classList.remove('active');
    }
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

const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop <= windowHeight || window.scrollY <= 300) {
        backToTopButton.classList.remove('active');
        backToTopButton.style.opacity = "0";
        backToTopButton.style.visibility = "hidden";
    } else {
        backToTopButton.classList.add('active');
        backToTopButton.style.opacity = "1";
        backToTopButton.style.visibility = "visible";
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
const typingTextSpan = document.querySelector('.typewriter-text');
const originalText = "DevOps Engineer & ML Enthusiast";

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        typingTextSpan.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

function checkScreenSize() {
    // If screen is small, skip the typing animation
    if (window.innerWidth <= 425) {
      const typingElement = document.querySelector('.hero-content h2');
      if (typingElement) {
        typingElement.textContent = originalText;
      }
    }
  }
  
  document.body.addEventListener('click', (e) => {
    const el = e.target.closest('a, button');
  
    if (!el) return;
  
    setTimeout(() => {
      el.blur();
      el.classList.remove('active');
  
      // Clone the element to fully reset its internal state
      const newEl = el.cloneNode(true);
      [...el.attributes].forEach(attr => newEl.setAttribute(attr.name, attr.value));
      newEl.innerHTML = el.innerHTML;
  
      el.replaceWith(newEl);
    }, 100);
  });

