// Wait until the page is fully loaded
window.addEventListener('load', function() {
    // Keep the loading screen visible for at least 2 seconds
    setTimeout(function() {
      // Hide the loading screen
      const loadingScreen = document.getElementById('loading-screen');
      loadingScreen.style.display = 'none';
  
      // Add the 'loaded' class to body to show the content
      document.body.classList.add('loaded');
    }, 1500); // 3 seconds
  });
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');
  
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggles the menu to show/hide
    menuIcon.classList.toggle('change'); // Toggles the 3-strip to "X"
  });


  function showPopup() {
    document.getElementById("warningPopup").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("warningPopup").style.display = "none";
  }
  
  // Disable right-click
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    showPopup();
  });
  
  // Disable F12 and Ctrl+U
  document.addEventListener("keydown", function (event) {
    // Detect F12
    if (event.key === "F12") {
      event.preventDefault();
      showPopup();
    }
  
    // Detect Ctrl+U
    if (event.ctrlKey && event.key === "u") {
      event.preventDefault();
      showPopup();
    }
  });
