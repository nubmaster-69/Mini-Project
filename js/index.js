// var idx = 1;
// setInterval(function autoSlide() {

//     if (idx > 5) {
//         document.getElementById('showcase-img').src = "./img/products-pic/img-slider/" +
//             (1) + ".png";
//         idx = 2;
//     }
//     else {
//         document.getElementById('showcase-img').src = "./img/products-pic/img-slider/" +
//             (idx++) + ".png";
//     }
// }, 5000);

function changeImg(source) {
    document.getElementById('showcase-img').src = source.src;
}

function changeColor(newColor) {
    document.documentElement.style.setProperty('--primary-color', newColor);
}