//Exporing modules

console.log('Exporting Module');

export const shippingCost = 10;
export const cart = [];

// Note: All the variable inside this modules is scoped for itself and it is private for this module itself

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };
//--export { totalPrice, totalQuantity as tq }; :: Another way of changing name

// :: ---Default Export-----

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
