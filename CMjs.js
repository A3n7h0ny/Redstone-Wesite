  
        // === SPLASH SCREEN FUNCTIONALITY ===
        const splashScreen = document.getElementById('splashScreen');
        const splashVideo = document.getElementById('splashVideo');
        
        // When video ends or loading completes, hide splash
        function hideSplash() {
            splashScreen.classList.add('fade-out');
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 800);
        }
        
        // Video ended
        if (splashVideo) {
            splashVideo.onended = hideSplash;
        }
        
        // Skip button
        function skipSplash() {
            hideSplash();
        }
        
        // Fallback: Auto-hide after 8 seconds max
        setTimeout(hideSplash, 8000);
        
        // If video fails to load, show fallback and auto-hide
        if (splashVideo) {
            splashVideo.onerror = function() {
                console.log("Video failed to load, using fallback");
                setTimeout(hideSplash, 5000);
            };
        }

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

        // === APPOINTMENT FORM HANDLING ===
        const appointmentForm = document.getElementById('appointmentForm');
        
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show an alert
            alert('Thank you for your appointment request! We will contact you shortly to confirm your appointment.');
            appointmentForm.reset();
        });

        // Set minimum date for appointment to today
        const dateInput = document.getElementById('date');
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    
        