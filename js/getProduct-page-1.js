const productList = [
    {
        id: 1,
        name: 'MSI GE66 10SF',
        price: '$ 2,604',
        img: './img/products/list/1.png'
    },
    {
        id: 2,
        name: 'MMSI Creator Series',
        price: '$ 1,521',
        img: './img/products/list/2.png'
    },
    {
        id: 3,
        name: 'MSI GL75 Leopard',
        price: '$ 996',
        img: './img/products/list/3.png'
    },
    {
        id: 4,
        name: 'ASUS TUF A15',
        price: '$ 899',
        img: './img/products/list/4.png'
    },
    {
        id: 5,
        name: 'Acer Nitro 5',
        price: '$ 696',
        img: './img/products/list/5.png'
    },
    {
        id: 6,
        name: 'Acer Concept 3 Ezel',
        price: '$ 1,692',
        img: './img/products/list/6.png'
    },
    {
        id: 7,
        name: 'Acer Aspire 3 Series',
        price: '$ 549',
        img: './img/products/list/7.png'
    },
    {
        id: 8,
        name: 'Acer Aspire 3 Series',
        price: '$ 800',
        img: './img/products/list/8.png'
    },
];

products.forEach(product => {
    product.addEventListener('click', (e) => {
        window.location.href = "./product-details.html";
    });
});

let getProductDesc = () => {
    let len = productList.length;
    for (let i = 0; i < len; i++)
        setProductDesc(i);
}

let setProductDesc = (idx) => {
    productImgs[idx].src = productList[idx].img;
    productNames[idx].textContent = productList[idx].name;
    productPrices[idx].textContent = productList[idx].price;
}

getProductDesc();