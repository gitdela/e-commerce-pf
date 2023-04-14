const openNav = document.querySelector('#openNav');
const navbar = document.querySelector('#navbar');

const closeNav = document.querySelector('#closeNav');

if (openNav) {
  openNav.addEventListener('click', () => {
    navbar.classList.add('active');
  });
}
if (closeNav) {
  closeNav.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
}
