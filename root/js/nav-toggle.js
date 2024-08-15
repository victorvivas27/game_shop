// nav-toggle.js

const faSolid = document.querySelector('.icono-menu');
console.log(faSolid);

const menuCelu = document.querySelector('.lista-navbar-celu');
console.log(menuCelu);

function toggleMenu() {
    if (menuCelu.classList.contains('show')) {
        menuCelu.classList.remove('show');
        menuCelu.classList.add('hide');
        // Handle hiding the menu after animation ends
        menuCelu.addEventListener('animationend', () => {
            menuCelu.style.display = 'none';
        }, {once: true});
    } else {
        menuCelu.classList.remove('hide');
        menuCelu.classList.add('show');
        menuCelu.style.display = 'flex';
    }
}

function handleResize() {
    if (window.innerWidth > 600) {
        menuCelu.classList.remove('show', 'hide');
        menuCelu.style.display = ''; // Reset display property for larger screens
    }
}

// Ensure faSolid is correctly initialized before adding event listener
if (faSolid) {
    faSolid.addEventListener('click', toggleMenu);
}

// Ensure handleResize is called on page load
window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);