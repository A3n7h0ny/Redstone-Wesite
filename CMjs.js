 // === SPLASH SCREEN FUNCTIONALITY ===
        const splashScreen = document.getElementById('splashScreen');
        const splashVideo = document.getElementById('splashVideo');
        
        // When video ends or loading completes, hide splash
        function hideSplash() {
            splashScreen.classList.add('fade-out');
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 800); // Match the fadeOut animation duration
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



        // Dark/Light Mode Toggle
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
                color: white;
            }
            
            .dark-mode nav {
                background-color: #2d2d2d;
            }
            
            .dark-mode header {
                background: linear-gradient(90deg, #2d2d2d, #2d2d2d77), url(images/pexels-karola-g-5206940.jpg);
            }
        `;
        document.head.appendChild(style);