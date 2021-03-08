const images = [
    {
        imgSrc: "./img/products/img-slider/1.png",
        bgColor: "#ff3e00"
    },
    {
        imgSrc: "./img/products/img-slider/2.png",
        bgColor: "#766bd1"
    },
    {
        imgSrc: "./img/products/img-slider/3.png",
        bgColor: "#2c6ad9"
    },
    {
        imgSrc: "./img/products/img-slider/4.png",
        bgColor: "#ff6700"
    },
    {
        imgSrc: "./img/products/img-slider/5.png",
        bgColor: "#e70213"
    }
];

const productImgs = document.querySelectorAll('.product-img');
const productNames = document.querySelectorAll('.product-name');
const productPrices = document.querySelectorAll('.price');

const menuToggler = document.querySelector('.menu-toggler');
const navLinks = document.querySelector('.nav-links');
const toFavList = document.querySelectorAll('.to-fav-list');
const products = document.querySelectorAll('.product');

// let idx = 0, imagesLength = images.length;
// setInterval(function autoSlide() {
//     idx++;
//     if (idx >= imagesLength) {
//         idx = 0;
//         AutoChangeImg(images[idx].imgSrc);
//         changeColor(images[idx].bgColor);
//     }
//     else {
//         AutoChangeImg(images[idx].imgSrc);
//         changeColor(images[idx].bgColor);
//     }
// }, 6000);

function AutoChangeImg(source) {
    document.getElementById('showcase-img').src = source;
}

function changeImg(source) {
    document.getElementById('showcase-img').src = source.src;
}

function changeColor(newColor) {
    document.documentElement.style.setProperty('--primary-color', newColor);
}

// Menu toggle
menuToggler.addEventListener('click', () => {
    navLinks.classList.toggle('menu-active');
    menuToggler.classList.toggle('menu-close');
});

// Add item(s) to favorite list
toFavList.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('far'))
            item.classList.replace('far', 'fas');
        else
            item.classList.replace('fas', 'far');
    });
});

// Sticky navbar after scroll
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});