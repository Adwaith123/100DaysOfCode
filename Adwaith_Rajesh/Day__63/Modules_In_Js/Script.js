// Importing Module
//Changing names of the imported varibale totalPrice as price

console.log('Importing Module');
/*
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

console.log(price, tq);

addToCart('bread', 5);

*/

//--------------importing all the values-------------

/*
import * as ShoppingCart from './shoppingCart.js';
//module exports kindly act as a public api

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

*/
/*---------------------------------------------

1.Importing modules are typically hoisted to the top..
2.Here modules dosent require 'strict mode' , By default it operates on it.
3.Here varibles declared inside a module are scoped in that module itself.(like private variables for a single module)
--------------------------------------------*/
//--- import add, { totalPrice as price, tq } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js'; // we should not mix default exports with other named exports in real world
// importing default values
// console.log(price, tq);
add('pizzas', 2);
add('peas', 2);
add('apples', 2);
add('oranges', 2);

console.log(cart);

//Note : import are not copies of exports , its a live connection between them , like a a single file , they points to the same location in memory in case of an object or an array
