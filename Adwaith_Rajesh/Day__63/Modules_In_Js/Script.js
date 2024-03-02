//Lecture ---273 Exporting and Importing in ES6 Modules

//Importing modules

/*------>>>>>>>>>-----------Section 1------->>>>>>>>>----------------

import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js'; // Without extension will also work

--------Changing the name of imports--------
import { totalPrice as price , totalQuantity as quantity } from './shoppingCart.js';
   

    console.log('Importing Module');
    addToCart('bread', 5);
    console.log(totalPrice, totalQuantity);

     ------>>>>>>>>>------Section 1------->>>>>>>>>---------
*/

//  -------Importing everything from the exported module---------

/*----------------Section 2------------------


// ----- Module is just like a public API---

import * as shoppingCart from './shoppingCart.js';

console.log('Importing Module');

shoppingCart.addToCart('coco', 10);
console.log(shoppingCart.shippingCost);

-------->>>>>>>>>------Section 2----------->>>>>>>>>-------------*/

//Note :: Default Export --> It is used when we export only one thing from a module

/*----->>>>>-----------Section3--------->>>>>>---------

//-----------Importing default export-------------

import add from './shoppingCart.js'; // Don't need curly braces
add('Pizza', 2);

//----Avoid named export and default export together like given example---

 *** import add , { addToCart, totalPrice, totalQuantity } from './shoppingCart.js'***

-------->>>>>>>>>>>>>>--------Section3-------->>>>>>>>>>----------
*/

// Note : imports are live connection to exports

/*
-->>>>>>>>>>>>>>--------Section4-------->>>>>>>>>>--------

---An example to showcase the live conection between export and import

import add,{cart} from './shoppingCart.js';
add('pizza',2);
add('bread',4);
add('apples',5);

console.log(cart); //--Output : (3) [{…}, {…}, {…}]

-->>>>>>>>>>>>>>--------Section4-------->>>>>>>>>>--------
*/

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 4);
add('apples', 5);

console.log(cart);
