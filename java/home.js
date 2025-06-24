document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
      if (window.scrollY > 50) { // When scrolled down 50px
          navbar.classList.add("bg-gray-800", "bg-opacity-80", "backdrop-blur-md", "shadow-lg");
      } else {
          navbar.classList.remove("bg-gray-800", "bg-opacity-80", "backdrop-blur-md", "shadow-lg");
      }
  });

  // Mobile menu toggle
  menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("opacity-0");
      mobileMenu.classList.toggle("opacity-100");
  });

  // Custom Alert Modal Functions
  function showAlert(title, message) {
      const modal = document.getElementById("customAlertModal");
      document.getElementById("customAlertTitle").textContent = title;
      document.getElementById("customAlertMessage").textContent = message;
      modal.style.display = "flex";
      setTimeout(() => {
          modal.style.opacity = 1;
      }, 10);
  }

  function closeAlert() {
      const modal = document.getElementById("customAlertModal");
      modal.style.opacity = 0;
      setTimeout(() => {
          modal.style.display = "none";
      }, 300);
  }

  document.getElementById("customAlertCloseBtn").addEventListener("click", closeAlert);

  // Animated background: Stars
  const animatedBackground = document.querySelector('.animated-background');
  const numStars = 100; // Number of stars

  for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      const size = Math.random() * 2 + 1; // Size between 1px and 3px
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 5 + 3}s`; // Duration between 3s and 8s
      star.style.animationDelay = `${Math.random() * 5}s`; // Delay up to 5s
      animatedBackground.appendChild(star);
  }
});


    // Custom Alert Modal Functions
    function showAlert(title, message, iconHtml = '') {
        const modal = document.getElementById("customAlertModal");
        const customAlertIcon = document.getElementById("customAlertIcon"); // Get the new icon element
        const customAlertTitle = document.getElementById("customAlertTitle");
        const customAlertMessage = document.getElementById("customAlertMessage");

        // Set the icon
        customAlertIcon.innerHTML = iconHtml; // Place icon HTML directly into the icon div

        // Set the title and message
        customAlertTitle.textContent = title;
        customAlertMessage.textContent = message;

        modal.style.display = "flex";
        setTimeout(() => {
            modal.style.opacity = 1;
        }, 10);
    }

    function closeAlert() {
        const modal = document.getElementById("customAlertModal");
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    document.getElementById("customAlertCloseBtn").addEventListener("click", closeAlert);

    // --- DevTools Warning Start ---
    // Function to prevent common DevTools opening methods
    function preventDevTools(event) {
        // SVG for the warning icon (yellow triangle with exclamation mark)
        const warningIconSVG = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-yellow-500 w-16 h-16 mx-auto">
                <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.198 0l7.359 12.75c1.154 2-.29 4.5-2.599 4.5H4.64c-2.309 0-3.753-2.5-2.598-4.5l7.359-12.75zM12 9a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0112 9zm0 6a.75.75 0 100 1.5.75.75 0 000-1.5z" clip-rule="evenodd" />
            </svg>
        `;

        // SVG for the no-entry/stop icon (red circle with diagonal line)
        const noEntryIconSVG = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-red-500 w-16 h-16 mx-auto">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.68 1.69a.75.75 0 101.06 1.06L12 13.06l1.69 1.68a.75.75 0 101.06-1.06L13.06 12l1.68-1.69a.75.75 0 10-1.06-1.06L12 10.94l-1.69-1.68z" clip-rule="evenodd" />
            </svg>
        `;

        // Prevent right-click context menu
        if (event.type === 'contextmenu') {
            event.preventDefault();
            showAlert("Warning!", "Right-click is disabled on this page.", noEntryIconSVG); // Pass SVG to showAlert
        }

        // Prevent F12 (DevTools toggle) and Ctrl/Cmd+Shift+I (inspect element)
        if (event.type === 'keydown') {
            const isF12 = event.keyCode === 123; // F12 key
            const isCtrlShiftI = (event.ctrlKey || event.metaKey) && event.shiftKey && event.keyCode === 73; // Ctrl/Cmd + Shift + I
            const isCtrlShiftJ = (event.ctrlKey || event.metaKey) && event.shiftKey && event.keyCode === 74; // Ctrl/Cmd + Shift + J (Console)
            const isCtrlU = (event.ctrlKey || event.metaKey) && event.keyCode === 85; // Ctrl/Cmd + U (View Source)
            const isCtrlS = (event.ctrlKey || event.metaKey) && event.keyCode === 83; // Ctrl/Cmd + S (Save Page)

            if (isF12 || isCtrlShiftI || isCtrlShiftJ || isCtrlU || isCtrlS) {
                event.preventDefault();
                showAlert("Warning!", "Developer tools are disabled. Please enjoy the site!", warningIconSVG); // Pass SVG to showAlert
            }
        }
    }

    // Add event listeners for right-click and keyboard shortcuts
    document.addEventListener('contextmenu', preventDevTools);
    document.addEventListener('keydown', preventDevTools);
    // --- DevTools Warning End ---
