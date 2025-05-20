// Initialize animations and interactions
document.addEventListener('DOMContentLoaded', function() {
  // Floating nav background change on scroll
  const floatingNav = document.querySelector('.floating-nav');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      floatingNav.classList.add('scrolled');
    } else {
      floatingNav.classList.remove('scrolled');
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('.floating-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    });
  });

  // Animate project cards when they come into view
  const projectCards = document.querySelectorAll('.project-card');
  
  const animateCards = () => {
    projectCards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (cardTop < windowHeight - 100) {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 150);
      }
    });
  };

  // Initial check
  animateCards();
  
  // Check on scroll
  window.addEventListener('scroll', animateCards);

  // Form submission handling
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = this.querySelector('.submit-btn');
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      submitBtn.style.backgroundColor = '#00b894';
      
      setTimeout(() => {
        submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        submitBtn.style.backgroundColor = '';
        this.reset();
      }, 3000);
    });
  }

  // Add hover effect to skill list items
  const skillItems = document.querySelectorAll('.skill-category li');
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(5px)';
      this.style.color = 'var(--secondary)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.color = '';
    });
  });
});

// Add a cool console message
console.log('%c👋 Hello there! Looking for a skilled frontend developer?', 
  'color: #6e57e0; font-size: 16px; font-weight: bold;');
console.log('%cCheck out my portfolio and let\'s connect!', 
  'color: #1a1a2e; font-size: 14px;');