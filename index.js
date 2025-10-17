const products = [
  {
    name: "Chips",
    price: 4.5,
    inStock: true,
    id: "food",
    img: "https://cdn11.bigcommerce.com/s-840m18ew7o/products/3248/images/4866/44359__19670.1592331568.386.513.jpg?c=1",
  },
  {
    name: "Soda",
    price: 2.5,
    inStock: true,
    id: "drink",
    img: "https://th.bing.com/th/id/R.a7caeda5965272bbce7af548727e2155?rik=Re6%2f66XLASoodA&riu=http%3a%2f%2fsc02.alicdn.com%2fkf%2fUTB8hq1MxVfFXKJk43Otq6xIPFXaL%2fCoca-Cola-330ml.jpg&ehk=G%2fOjbOiVtxBzFeGgjDtc%2bomj5VNqtVRZEr9nTMlS5XQ%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Juice",
    price: 1.0,
    inStock: true,
    id: "drink",
    img: "https://images.heb.com/is/image/HEBGrocery/001071026-1",
  },
  {
    name: "Gas can",
    price: 40.0,
    inStock: true,
    id: "other",
    img: "https://mobileimages.lowes.com/product/converted/044549/044549800332.jpg",
  },
  {
    name: "Peanuts",
    price: 1.92,
    inStock: true,
    id: "food",
    img: "https://m.media-amazon.com/images/I/51q+SKvitlL.jpg",
  },
  {
    name: "Alcohol",
    price: 2.69,
    inStock: true,
    id: "drink",
    img: "https://i5.walmartimages.com/asr/8f0a9d7c-bb1c-4bef-aace-cf12f520c19a_1.de218dd3241f1c4c087bf9e4a740cc7b.jpeg",
  },
  {
    name: "Cigarettes",
    price: 6.0,
    inStock: true,
    id: "other",
    img: "https://images.gopuff.com/blob/gopuffcatalogstorageprod/catalog-images-container/resize/cf/version=1_2,format=auto,fit=scale-down,width=800,height=800/b086c5e6-2c22-4bde-af48-b2e615afcf16-background_removed.png",
  },
  {
    name: "Coffee",
    price: 5.0,
    inStock: true,
    id: "drink",
    img: "https://4.imimg.com/data4/NM/VH/MY-978282/coffee-paper-cups-500x500.jpg",
  },
  {
    name: "Breakfast Sandwich",
    price: 6.0,
    inStock: true,
    id: "food",
    img: "https://media.istockphoto.com/photos/bagel-with-scrambled-eggs-and-bacon-isolated-on-white-picture-id475835518?k=20&m=475835518&s=612x612&w=0&h=hszmOvwECdHPASCIZWZ1VbXfC9dTnsZYqxSsdeOg2mw=",
  },
  {
    name: "BLT",
    price: 8.0,
    inStock: true,
    id: "food",
    img: "https://thumbs.dreamstime.com/b/tasty-bacon-lettuce-tomato-blt-sandwich-white-background-324702360.jpg",
  },
  {
    name: "Pretzel",
    price: 2.5,
    inStock: true,
    id: "food",
    img: "https://img.freepik.com/premium-photo/illustration-white-background-delicious-pretzels-image_435599-29489.jpg",
  },
  {
    name: "Chicken",
    price: 10.0,
    inStock: true,
    id: "food",
    img: "https://tse2.mm.bing.net/th/id/OIP.sdYMm8mPyU9zQon3vlPUlQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Water",
    price: 2.5,
    inStock: true,
    id: "drink",
    img: "https://media1.popsugar-assets.com/files/thumbor/oUUQDbG6yDYSgG-5BQS6QRGj0RE/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2015/10/28/798/n/1922398/fb0bffcf28178694_spin_prod_ec_1567913002.jpeg",
  },
  {
    name: "Granola Bar",
    price: 3.0,
    inStock: true,
    id: "food",
    img: "https://m.media-amazon.com/images/I/81qN8VrAo+L._SX679_.jpg",
  },
  {
    name: "Energy Drink",
    price: 4.25,
    inStock: true,
    id: "drink",
    img: "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/317852---Monster-White-Ultra-Zero-500ml-Can-HR.jpg",
  },
  {
    name: "Sunscreen",
    price: 2.99,
    inStock: true,
    id: "other",
    img: "https://thmappbkk.blob.core.windows.net/boots/2023/3/23/daf025bd-4a6d-41c8-aa49-455d630e0379_large.jpg",
  },
  {
    name: "Chocolate Bar",
    price: 2.75,
    inStock: true,
    id: "food",
    img: "https://i5.walmartimages.com/seo/HERSHEY-S-Milk-Chocolate-Bar-1-55-Ounces_edcb3ccb-d566-4667-ab58-8e2239188f9b.c2a7a30921866470122ff332bf84454f.jpeg",
  },
  {
    name: "Tea",
    price: 3.5,
    inStock: true,
    id: "drink",
    img: "https://cdn0.woolworths.media/content/wowproductimages/large/791702.jpg",
  },
  {
    name: "Flashlight",
    price: 5.0,
    inStock: true,
    id: "other",
    img: "https://tse2.mm.bing.net/th/id/OIP._Md36Mi0njwoY-lzd_ScnQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Yogurt",
    price: 1.99,
    inStock: true,
    id: "food",
    img: "https://i5.walmartimages.com/asr/3b067099-4104-4e4a-88e9-89d17e3dcc90_1.792da3187113c0c4aa7dd0aa3345a8af.jpeg",
  },
];
/* 
products.forEach((products) => makeCard(products));
function makeCard(item) {
    
} */
function inject(products) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-name = "${products.name}" data-id = "${products.id}">
      <img class="img" src="${products.img}" alt=""/>
      <h2 class="name">${products.name}</h2>
      <h2 class="price">$${products.price}</h2>
      <button class="button">Buy Product</button>
    </div>`
  );
}

products.forEach((product) => inject(product));

function addToCart() {
  const buttons = document.querySelectorAll("button");
  const btnArray = Array.from(buttons);
  const cart = []
  btnArray.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      products.forEach((products) => {
      if(
        products.name == ((event.target.closest(".card").getAttribute("data-name")))
      )
      cart.push (products);
    })
    console.log(cart)
    })
  );
}

addToCart()