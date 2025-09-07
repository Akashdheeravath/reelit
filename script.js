// Countdown Timer
function initCountdown() {
    // Set launch date (30 days from now)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    
    const countdownElements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate.getTime() - now;
        
        if (distance < 0) {
            // Launch date has passed
            Object.values(countdownElements).forEach(element => {
                element.textContent = '00';
            });
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownElements.days.textContent = days.toString().padStart(2, '0');
        countdownElements.hours.textContent = hours.toString().padStart(2, '0');
        countdownElements.minutes.textContent = minutes.toString().padStart(2, '0');
        countdownElements.seconds.textContent = seconds.toString().padStart(2, '0');
    }
    
    // Update countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Email Form Handling
function initEmailForm() {
    const form = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('i');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (!isValidEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.textContent = 'Sending...';
        btnIcon.className = 'fas fa-spinner fa-spin';
        
        try {
            // Simulate API call
            await simulateEmailSubmission(email);
            
            // Show success
            showSuccessModal();
            form.reset();
            
        } catch (error) {
            showError('Something went wrong. Please try again.');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.textContent = 'Notify Me';
            btnIcon.className = 'fas fa-arrow-right';
        }
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Simulate email submission
function simulateEmailSubmission(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate success (90% success rate)
            if (Math.random() > 0.1) {
                resolve({ success: true, email });
            } else {
                reject(new Error('Submission failed'));
            }
        }, 1500);
    });
}

// Show error message
function showError(message) {
    // Create error element if it doesn't exist
    let errorElement = document.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.cssText = `
            background: rgba(255, 0, 0, 0.1);
            border: 1px solid rgba(255, 0, 0, 0.3);
            color: #ff6b6b;
            padding: 1rem;
            border-radius: 10px;
            margin-top: 1rem;
            animation: slideInDown 0.3s ease-out;
        `;
        document.querySelector('.email-form').appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    
    // Remove error after 5 seconds
    setTimeout(() => {
        if (errorElement && errorElement.parentNode) {
            errorElement.remove();
        }
    }, 5000);
}

// Show success modal
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('show');
    
    // Add animation styles if not already present
    if (!document.querySelector('#modal-animations')) {
        const style = document.createElement('style');
        style.id = 'modal-animations';
        style.textContent = `
            @keyframes slideInDown {
                from {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('show');
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
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
        });
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Parallax effect for floating shapes
function initParallaxEffect() {
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// Add hover effects to countdown units
function initCountdownHoverEffects() {
    const timeUnits = document.querySelectorAll('.time-unit');
    
    timeUnits.forEach(unit => {
        unit.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.2)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        });
        
        unit.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.1)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        });
    });
}

// Keyboard navigation for accessibility
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Close modal with Escape key
        if (e.key === 'Escape') {
            closeModal();
        }
        
        // Focus management for form
        if (e.key === 'Tab') {
            const form = document.getElementById('emailForm');
            const inputs = form.querySelectorAll('input, button');
            const focusedElement = document.activeElement;
            
            if (focusedElement === inputs[inputs.length - 1] && !e.shiftKey) {
                e.preventDefault();
                inputs[0].focus();
            }
        }
    });
}

// Add loading animation
function initLoadingAnimation() {
    // Add a subtle loading animation to the page
    document.body.style.opacity = '0';
    
    window.addEventListener('load', function() {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    });
}

// Initialize all functionality
function init() {
    initCountdown();
    initEmailForm();
    initSmoothScrolling();
    initScrollAnimations();
    initParallaxEffect();
    initCountdownHoverEffects();
    initKeyboardNavigation();
    initLoadingAnimation();
    
    // Add some console branding
    console.log('%c🎬 Welcome to ReelIt! 🎬', 'color: #ffd700; font-size: 20px; font-weight: bold;');
    console.log('%cWe\'re excited to show you what we\'re building!', 'color: #667eea; font-size: 14px;');
}

// Start the application when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    // Recalculate any size-dependent animations
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        // Reset transform to prevent layout issues
        shape.style.transform = '';
    });
});

// Add click outside to close modal
document.addEventListener('click', function(e) {
    const modal = document.getElementById('successModal');
    if (e.target === modal) {
        closeModal();
    }
});
