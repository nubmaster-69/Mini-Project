const toFavList = document.querySelectorAll('.to-fav-list');
const menuToggler = document.querySelector('.menu-toggler');
const navLinks = document.querySelector('.nav-links');

toFavList.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('far'))
            item.classList.replace('far', 'fas');
        else
            item.classList.replace('fas', 'far');
    });
});

// Menu toggle
menuToggler.addEventListener('click', () => {
    navLinks.classList.toggle('menu-active');
    menuToggler.classList.toggle('menu-close');
});

// Sticky navbar after scroll
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});