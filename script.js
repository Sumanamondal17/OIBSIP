const menuToggle = document.getElementById('menu-toggle');
const navmenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navmenu.classList.toggle('active');
});