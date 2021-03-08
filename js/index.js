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

    // item structure
    {/* 
<div class="item sell-item">
    <div class="product" id="product-1">
        <img class="product-img" src="" alt="">
        <p class="product-name"></p>
    </div>
    <div class="detail">
        <i class="far fa-heart to-fav-list"></i>
        <span class="price"></span>
        <i class="fas fa-cart-plus add-to-cart"></i>
    </div>
</div> */}

    let item = document.createElement('div');
    item.classList = 'item sell-item';

    let productDiv = document.createElement('div');
    productDiv.classList = 'product';

    let image = document.createElement('img');
    image.classList = 'product-img';
    image.src = productList[idx].img;

    let p = document.createElement('p');
    p.classList = 'product-name';
    p.textContent = productList[idx].name;

    productDiv.appendChild(image);
    productDiv.appendChild(p);

    item.appendChild(productDiv);

    let productDetailDiv = document.createElement('div');
    productDetailDiv.classList = 'detail'

    let heartIcon = document.createElement('i');
    heartIcon.classList = 'far fa-heart to-fav-list'

    let span = document.createElement('span');
    span.classList = 'price';
    span.textContent = productList[idx].price;

    let cartIcon = document.createElement('i');
    cartIcon.classList = 'fas fa-cart-plus add-to-cart'

    productDetailDiv.appendChild(heartIcon);
    productDetailDiv.appendChild(span);
    productDetailDiv.appendChild(cartIcon);

    item.appendChild(productDetailDiv);

    productContainer.append(item);
}