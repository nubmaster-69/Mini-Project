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

const productContainer = document.querySelector('.product-list');

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

// create the product and append to the page
let createItem = (idx) => {
    let item = document.createElement('div');
    item.classList = 'item sell-item';
    item.innerHTML = `
    <div class="product">
        <img class="product-img" src="${productList[idx].img}" alt="">
        <p class="product-name">${productList[idx].name}</p>
    </div>
    <div class="detail">
        <i class="far fa-heart to-fav-list"></i>
        <span class="price">${productList[idx].price}</span>
        <i class="fas fa-cart-plus add-to-cart"></i>
    </div>
    `
    productContainer.append(item);
}