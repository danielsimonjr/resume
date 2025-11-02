// Resume Website Interactive Features
// This JavaScript enhances user experience with smooth animations and navigation updates

// Wait for the DOM (Document Object Model) to fully load before running scripts
// This ensures all HTML elements exist before we try to manipulate them
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== Active Navigation Link Highlighting ==========
    // This updates which navigation link is highlighted based on which section is visible
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    // Get all sections that have an id (so they can be targeted by nav links)
    const sections = document.querySelectorAll('section[id]');
    
    // Function to update which nav link appears active
    function updateActiveNavLink() {
        // Get current scroll position
        const scrollPosition = window.scrollY + 100; // Add offset for better UX
        
        // Loop through each section to see which one is currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            // Check if current scroll position is within this section
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to the link that corresponds to current section
                const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Call the function when user scrolls
    window.addEventListener('scroll', updateActiveNavLink);
    // Also call it on page load to set initial state
    updateActiveNavLink();
    
    
    // ========== Smooth Scroll with Offset ==========
    // When clicking navigation links, scroll smoothly and account for sticky navbar height
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default jump behavior
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Get the height of the sticky navbar
                const navBar = document.querySelector('.nav-bar');
                const navBarHeight = navBar.offsetHeight;
                
                // Calculate position to scroll to (accounting for navbar)
                const targetPosition = targetSection.offsetTop - navBarHeight - 20;
                
                // Smooth scroll to the calculated position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // ========== Fade-In Animation on Scroll ==========
    // Elements fade in as you scroll down the page, creating a polished experience
    
    // Create an Intersection Observer that watches when elements enter the viewport
    // This is more performant than checking scroll position constantly
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully visible
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            // If element is now visible
            if (entry.isIntersecting) {
                // Add 'visible' class to trigger CSS animation
                entry.target.classList.add('fade-in-visible');
                // Stop observing this element (animation only happens once)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Select all elements we want to animate
    const animateElements = document.querySelectorAll(
        '.competency-card, .timeline-item, .skill-category, .education-card, .philosophy-quote'
    );
    
    // Add initial class and start observing each element
    animateElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
    
    
    // ========== Mobile Navigation Toggle ==========
    // For future enhancement: Add hamburger menu for mobile devices
    // This would be implemented if you want a collapsible navigation on small screens
    
    // Example structure (currently navigation wraps on mobile, but you could enhance this):
    /*
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.classList.add('mobile-menu-toggle');
    mobileMenuToggle.innerHTML = '☰';
    // Add event listener to toggle mobile menu
    // Add corresponding CSS for mobile menu behavior
    */
    
    
    // ========== Performance: Debounce Scroll Events ==========
    // Debouncing limits how often scroll functions run, improving performance
    
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
    
    // Apply debouncing to scroll handler
    const debouncedScrollHandler = debounce(updateActiveNavLink, 100);
    window.addEventListener('scroll', debouncedScrollHandler);
    
    
    // ========== Email Obfuscation (Anti-Spam) ==========
    // If you add your email address, this prevents bots from harvesting it
    
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        // You can implement email obfuscation here if needed
        // For now, just ensure mailto links work properly
        link.addEventListener('click', function(e) {
            // Optional: Track email link clicks with analytics
            // console.log('Email link clicked');
        });
    });
    
    
    // ========== Console Easter Egg ==========
    // A little message for anyone who opens the developer console
    
    console.log('%c👋 Hello, curious engineer!', 'font-size: 20px; font-weight: bold; color: #2C5F2D;');
    console.log('%cI see you\'re checking out the code. That\'s the spirit!', 'font-size: 14px; color: #6b7280;');
    console.log('%cFeel free to reach out if you want to discuss systems thinking, test engineering, or philosophy.', 'font-size: 14px; color: #6b7280;');
    console.log('%c- Daniel Simon Jr.', 'font-size: 14px; font-style: italic; color: #2C5F2D;');
});


// ========== Add CSS for Fade-In Animations ==========
// These styles work with the JavaScript observer above
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in-visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Stagger animation timing for items in a group */
    .competency-card:nth-child(1) { transition-delay: 0.1s; }
    .competency-card:nth-child(2) { transition-delay: 0.2s; }
    .competency-card:nth-child(3) { transition-delay: 0.3s; }
    .competency-card:nth-child(4) { transition-delay: 0.4s; }
    .competency-card:nth-child(5) { transition-delay: 0.5s; }
    .competency-card:nth-child(6) { transition-delay: 0.6s; }
    
    /* Active nav link styling */
    .nav-links a.active {
        color: var(--primary-color);
    }
    
    .nav-links a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);
