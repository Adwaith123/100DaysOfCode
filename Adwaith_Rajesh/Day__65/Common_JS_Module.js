
// Lecture - 275 --The module pattern old way

// ------------Usecase of closures-----------------

// Older way of using module pattern to avoid , global varible pollution ,  create a new scope and  retur data once , the varible inside iffy will not be accesable globally

/*

  ---------------------Now shoppingCart2 as a object-------------

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart and , shippingCost is ${shippingCost}`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier `);
  };

  return { addToCart, cart, totalPrice, totalQuantity, orderStock };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.orderStock('pizza', 2);

console.log(ShoppingCart2.shippingCost); // Because shipping cost is not in the object shoppingCart2

 //Note : Here the object shoppingcart2 object all the content to the public




// Lecture --276---Node way of importing and exporting

//Note : Another module system used in the past along with 1.The module pattern and 2.Es6 module system

//exporting

export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart and , shippingCost is ${shippingCost}`
  );
};

//Import

const {addTocart} = require(./shoppingCart.js);