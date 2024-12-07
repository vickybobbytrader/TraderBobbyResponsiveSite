document.addEventListener('DOMContentLoaded', () => {
    // Animate achievement items on scroll
    const animateAchievements = () => {
        const achievements = document.querySelectorAll('.achievement-item');
        achievements.forEach((achievement, index) => {
            const rect = achievement.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                setTimeout(() => {
                    achievement.style.opacity = '1';
                    achievement.style.transform = 'translateY(0)';
                }, index * 200); // Stagger the animations
            }
        });
    };

    // Animate highlights on scroll
    const animateHighlights = () => {
        const highlights = document.querySelectorAll('.highlight-item');
        highlights.forEach((highlight, index) => {
            const rect = highlight.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                setTimeout(() => {
                    highlight.style.opacity = '1';
                    highlight.style.transform = 'translateX(0)';
                }, index * 200);
            }
        });
    };

    // Newsletter form handling with enhanced feedback
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = e.target.querySelector('input[type="email"]');
            const button = e.target.querySelector('button');
            const originalButtonText = button.innerHTML;
            
            // Disable form during submission
            input.disabled = true;
            button.disabled = true;
            button.innerHTML = '<i class="icon-loading"></i>';
            
            // Simulate API call
            setTimeout(() => {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'newsletter-success';
                successMessage.textContent = '🎉 Thank you for subscribing!';
                newsletterForm.insertAdjacentElement('afterend', successMessage);
                
                // Reset form
                e.target.reset();
                input.disabled = false;
                button.disabled = false;
                button.innerHTML = originalButtonText;
                
                // Remove success message after 3 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }, 1000);
        });
    }

    // Enhanced consultation button interaction
    const consultationBtn = document.querySelector('.mentor-cta');
    if (consultationBtn) {
        consultationBtn.addEventListener('click', () => {
            // Add loading state
            consultationBtn.innerHTML = '<i class="icon-loading"></i> Processing...';
            consultationBtn.disabled = true;
            
            // Simulate processing
            setTimeout(() => {
                // Show success message in a modal or notification
                const modal = document.createElement('div');
                modal.className = 'consultation-modal';
                modal.innerHTML = `
                    <div class="modal-content">
                        <h3>Thank You! 🎉</h3>
                        <p>We've received your consultation request. Our team will contact you shortly to schedule your session.</p>
                        <button class="modal-close">Close</button>
                    </div>
                `;
                document.body.appendChild(modal);
                
                // Reset button
                consultationBtn.innerHTML = 'Schedule a Consultation';
                consultationBtn.disabled = false;
                
                // Handle modal close
                const closeBtn = modal.querySelector('.modal-close');
                closeBtn.addEventListener('click', () => {
                    modal.remove();
                });
            }, 1500);
        });
    }

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize animations
    animateAchievements();
    animateHighlights();
    
    // Add scroll event listener for animations
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(() => {
            animateAchievements();
            animateHighlights();
        });
    });
});


//nav menu
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('active');
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('active');
        }
    });
});