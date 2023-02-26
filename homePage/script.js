const review1 = [
    {
        id: 0,
        img: '../assets/sala-design.jpg',
        name: 'Modern Picture',
        price: 'R$71,99' ,
        icon: '../assets/carrinhoDeCompras.png',
    },
    {
        id: 1,
        img: '../assets/sala4.jfif',
        name: 'Modern Picture',
        price: 'R$19,99' ,
        icon: '../assets/carrinhoDeCompras.png',
    },
    {
        id: 2,
        img: '../assets/sala8.jfif',
        name: 'Modern Picture',
        price: 'R$69,99' ,
        icon: '../assets/carrinhoDeCompras.png',
    },
    {
        id: 3,
        img: '../assets/sala12.jfif',
        name: 'Modern Picture',
        price: 'R$99,99' ,
        icon: '../assets/carrinhoDeCompras.png',
    }
];

const review2 = [
    {
        id: 0,
        img2: '../assets/sala2.jfif',
        name2: 'Modern Picture',
        price2: 'R$28,99' ,
        icon2: '../assets/carrinhoDeCompras.png',
    },
    {
        id: 1,
        img2: '../assets/sala5.jfif',
        name2: 'Modern Picture',
        price2: 'R$36,99' ,
        icon2: '../assets/carrinhoDeCompras.png',
    },
    {
        id: 2,
        img2: '../assets/sala7.jfif',
        name2: 'Modern Picture',
        price2: 'R$69,99' ,
        icon2: '../assets/carrinhoDeCompras.png',
    },
    {
        id: 3,
        img2: '../assets/sala11.jfif',
        name2: 'Modern Picture',
        price2: 'R$76,99' ,
        icon2: '../assets/carrinhoDeCompras.png',
    },
];

const review3 = [
    {
        id: 0,
        img3: '../assets/sala3.jfif',
        name3: 'Modern Picture',
        price3: 'R$73,99' ,
        icon3: '../assets/carrinhoDeCompras.png',
    },
    {
        id: 1,
        img3: '../assets/sala6.jfif',
        name3: 'Modern Picture',
        price3: 'R$25,99' ,
        icon3: '../assets/carrinhoDeCompras.png',
    },
    {
        id: 2,
        img3: '../assets/sala10.jfif',
        name3: 'Modern Picture',
        price3: 'R$82,99' ,
        icon3: '../assets/carrinhoDeCompras.png',
    },
    {
        id: 3,
        img3: '../assets/sala9.jfif',
        name3: 'Modern Picture',
        price3: 'R$87,99' ,
        icon3: '../assets/carrinhoDeCompras.png',
    },
];

const centerCard1 = document.querySelector('#center-card1')
const centerCard2 = document.querySelector('#center-card2')
const centerCard3 = document.querySelector('#center-card3')

const imagem1 = document.querySelector('#imagem-card1');
const imagem2 = document.querySelector('#imagem-card2');
const imagem3 = document.querySelector('#imagem-card3');

const icons = document.querySelector('#icon-card1')
const icons2 = document.querySelector('#icon-card2')
const icons3 = document.querySelector('#icon-card3')

const name1 = document.querySelector('#name-card1');
const name2 = document.querySelector('#name-card2');
const name3 = document.querySelector('#name-card3');
const price1 = document.querySelector('#price-card1');
const price2 = document.querySelector('#price-card2');
const price3 = document.querySelector('#price-card3');

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

const btnSearch = document.querySelector('#btn')
const btnAdd = document.querySelector('#btn-carrinho')


let currentItem1 = 0;
let currentItem2 = 0;
let currentItem3 = 0;

centerCard1.addEventListener('DOMContentLoaded' , function (){
    showPerson1();
});

function showPerson1() {
    imagem1.style.width = '275px';
    imagem1.style.height = '183px';
    const item = review1[currentItem1];
    imagem1.src = item.img;
    name1.textContent = item.name;
    price1.textContent = item.price;
    icons.src = item.icon;
}

centerCard2.addEventListener('DOMContentLoaded' , function (){
    showPerson2()
});

function showPerson2() {
    imagem2.style.width = '275px';
    imagem2.style.height = '183px';
    const item1 = review2[currentItem2];
    imagem2.src = item1.img2;
    name2.textContent = item1.name2;
    price2.textContent = item1.price2;
    icons2.src = item1.icon2;
}

centerCard3.addEventListener('DOMContentLoaded' , function (){
    showPerson3();
});

function showPerson3() {
    imagem3.style.width = '275px';
    imagem3.style.height = '183px';
    const item2 = review3[currentItem3];
    imagem3.src = item2.img3;
    name3.textContent = item2.name3;
    price3.textContent = item2.price3;
    icons3.src = item2.icon3;
}

nextBtn.addEventListener('click' , function(){
    currentItem1++;
    if(currentItem1 > review1.length - 1) {
        currentItem1 = 0;
    }
    currentItem2++;
    if(currentItem2 > review2.length - 1) {
        currentItem2 = 0;
    }
    currentItem3++;
    if(currentItem3 > review3.length - 1) {
        currentItem3 = 0;
    }
    showPerson1();
    showPerson2();
    showPerson3();
})

prevBtn.addEventListener('click' , function(){
    currentItem1--;
    if(currentItem1 < 0) {
        currentItem1 = review1.length - 1;
    }
    currentItem2--;
    if(currentItem2 < 0) {
        currentItem2 = review2.length - 1;
    }
    currentItem3--;
    if(currentItem3 < 0) {
        currentItem3 = review3.length - 1;
    }
    showPerson1();
    showPerson2();
    showPerson3();
})
