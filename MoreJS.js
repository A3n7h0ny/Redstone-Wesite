   // === NAVIGATION SCROLL EFFECT ===
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // === MOBILE MENU TOGGLE ===
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('nav ul');
        
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // Change icon
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            });
        });

        // === DARK/LIGHT MODE TOGGLE ===
        const themeToggle = document.getElementById('themeToggle');
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Change icon based on mode
            if (document.body.classList.contains('dark-mode')) {
                themeToggle.classList.remove('fa-moon');
                themeToggle.classList.add('fa-sun');
            } else {
                themeToggle.classList.remove('fa-sun');
                themeToggle.classList.add('fa-moon');
            }
        });

        // Add dark mode styles
        const style = document.createElement('style');
        style.textContent = `
            .dark-mode {
                background-color: #1a1a1a;
                color: #e0e0e0;
            }
            
            .dark-mode nav {
                background-color: rgba(30, 30, 30, 0.98);
            }
                
            
            .dark-mode .about-section,
            .dark-mode .facilities-section,
             .dark-mode .team-section,
            .dark-mode .gallery-section {
                background-color: #2d2d2d;
            }
            
            .dark-mode .facility-card,
            .dark-mode .team-card {
                background-color: #3d3d3d;
                color: #e0e0e0;
            }
            
            .dark-mode .section-title p,
            .dark-mode .facility-card p,
            .dark-mode .team-info p {
                color: #b0b0b0;
            }
                
        `;
        document.head.appendChild(style);

        // === SCROLL ANIMATIONS ===
        const fadeElements = document.querySelectorAll('.fade-in');
        
        function checkFade() {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('scroll', checkFade);
        window.addEventListener('load', checkFade);

        