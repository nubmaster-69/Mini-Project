const menuToggler = document.querySelector('.menu-toggler');
const navLinks = document.querySelector('.nav-links');

const quantity = document.querySelector('#quantity');
const btnIncrease = document.querySelector('#quantity-increase');
const btnDecrease = document.querySelector('#quantity-decrease');

let curQuantity = parseInt(quantity.value);

const showcaseImg = document.querySelector('#showcase-img');
const imgSlide = document.querySelectorAll('.img-slide');

imgSlide.forEach(img => {
    img.addEventListener('mouseenter', (e) => {
        showcaseImg.src = e.currentTarget.getAttribute('src');
    })
});

// increase/decrease quantity
btnIncrease.addEventListener('click', () => {
    curQuantity++;
    if (curQuantity > 99) {
        updateBtnState(99);
        btnIncrease.disabled = true;
        return;
    }

    resetBtnState();
});

btnDecrease.addEventListener('click', () => {
    curQuantity--;
    if (curQuantity <= 1) {
        updateBtnState(1);
        btnDecrease.disabled = true;
        return;
    }

    resetBtnState();
});
let resetBtnState = () => {
    quantity.value = curQuantity;
    btnIncrease.disabled = false;
    btnDecrease.disabled = false;
}
let updateBtnState = (num) => {
    curQuantity = num;
    quantity.value = curQuantity
}



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

