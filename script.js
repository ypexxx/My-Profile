// Hamburger menu
const navbar = document.querySelector('.navbar');
// Ketika hamburger di click
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
};

// Klik diluar untuk menutup item
const menu = document.querySelector('#menu-icon');

document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});