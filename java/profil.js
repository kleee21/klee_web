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
  
  // Disable F12, Ctrl+U, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, and Ctrl+Shift+K
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
  
    // Detect Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, and Ctrl+Shift+K
    if (
      event.ctrlKey && event.shiftKey &&
      (event.key === "I" || event.key === "J" || event.key === "C" || event.key === "K")
    ) {
      event.preventDefault();
      showPopup();
    }
  });
