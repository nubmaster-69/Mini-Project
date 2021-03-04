let images = [
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


const menuToggler = document.querySelector('.menu-toggler');
const navLinks = document.querySelector('.nav-links');
menuToggler.addEventListener('click', () => {
    navLinks.classList.toggle('menu-active');
    menuToggler.classList.toggle('menu-close');
});

// Add item(s) to favorite list
const toFavList = document.querySelectorAll('.to-fav-list')
toFavList.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('far'))
            item.classList.replace('far', 'fas');
        else
            item.classList.replace('fas', 'far');
    });
});