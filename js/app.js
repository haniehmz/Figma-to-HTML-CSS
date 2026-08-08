const dropdown = document.querySelector('.dropdown');
const toggle = dropdown.querySelector('.dropdown-toggle');
toggle.addEventListener('click', function (e) {
  e.stopPropagation();
  dropdown.classList.toggle('active');
});

document.addEventListener('click', function () {
  dropdown.classList.remove('active');
});


toggle.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.classList.toggle('open');
});

document.addEventListener('click', () => {
  dropdown.classList.remove('open');
});

const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

const menuIcon = 'img/menu.svg';
const closeIcon = 'img/close-square.svg';

menuButton.addEventListener('click', (e) => {
  e.preventDefault();
  mobileMenu.classList.toggle('active');
  overlay.classList.toggle('active');

 if (mobileMenu.classList.contains('active')) {
    menuButton.src = closeIcon;
  } else {
    menuButton.src = menuIcon;
  }
});

overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
  menuButton.src = menuIcon;
});
