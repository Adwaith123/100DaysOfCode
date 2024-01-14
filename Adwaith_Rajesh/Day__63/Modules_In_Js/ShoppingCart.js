// Exporting Module

console.log('Exporting Module');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  //   cart.push({ product: product, quantity: quantity });
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// exporting multiple things using name dexports

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

//Default exports -- exporting only a single item

export default function (product, quantity) {
  //   cart.push({ product: product, quantity: quantity });
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
