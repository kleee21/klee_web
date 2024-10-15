const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggles the menu to show/hide
    menuIcon.classList.toggle('change'); // Toggles the 3-strip to "X"
  });
