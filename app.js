const wrapper = document.querySelector('.slidder__wrapper');
const menuItems = document.querySelectorAll('.menu__item');

const products = [
    {
      id: 1,
      name: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      name: "Air Jordan",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      name: "Blazer",
      price: 99,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      name: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      name: "Hippie",
      price: 119,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

let chosenProduct = products[0];
const currentProductImg = document.querySelector('.product__img');
const currentProductName = document.querySelector('.product__name');
const currentProductPrice = document.querySelector('.product__price');
const currentProductColor = document.querySelectorAll('.colors');
const currentProductSize = document.querySelectorAll('.product__size');

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        chosenProduct = products[index];

        currentProductName.textContent = chosenProduct.name;
        currentProductPrice.textContent = '$' + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        currentProductColor.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});

currentProductColor.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});

currentProductSize.forEach((size) => {
    size.addEventListener('click', () => {
        currentProductSize.forEach((size) => {
            size.style.backgroundColor = '#FFF';
            size.style.color = '#111';
        })
        size.style.backgroundColor = '#111';
        size.style.color = '#FFF';
    });
});

const productButton = document.querySelector('.product__button');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click', () => {
  payment.style.display = 'flex';
});

close.addEventListener('click', () => {
  payment.style.display = 'none';
});