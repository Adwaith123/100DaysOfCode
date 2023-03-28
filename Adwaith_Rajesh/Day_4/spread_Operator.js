// ======spread Operator======

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

const newArray = [1, 2, ...arr];

console.log(badNewArr);
console.log(newArray); // [1, 2, 7, 8, 9]
console.log(...newArray); // 1 2 3 4 5 6 7 // Unlike destructuring here we are not creating new variables

const restaurant = {
  r_name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 2,
    mainIndex = 0,
    time = '21.00', //Adding default values
    address,
  }) {
    //reciveing an object
    console.log(
      `Order recieved Starter: "${this.starterMenu[starterIndex]}" and MainMenu: "${this.mainMenu[mainIndex]}" will be delivered to ${address} at ${time}}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
    );
  },
  //orderPasta(ing1, ing2, ing3) {  //A sorthand version of writing above code in ES6 form
  //console.log(
  //`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
  //);
};

const newMenu = [...restaurant.mainMenu, 'Gnocci']; //Expanding an array by creatng new array
//console.log(newMenu);

//===========Copy array=======

const mainMenuCopy = [...restaurant.mainMenu];

//console.log(mainMenuCopy);

// ======join Two array=======

//Method: 1:
const joinedArray = [...restaurant.starterMenu].concat(restaurant.mainMenu);
console.log(joinedArray);

// //Method:2:
const completeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(completeMenu);

//Iterables===============

const str = 'Adwaith';
const letters = [...str];
console.log(letters); //['A', 'd', 'w', 'a', 'i', 't', 'h']
console.log(...str); //A d w a i t h

//Using tempalte literals

//console.log(`${...str} rajesh`); //Here it will not work because multiple values separeted by commas are usually accepted when we pass arguments into a function or built arrays

const ingredients = [
  prompt("Lets's make pasta! Ingredient 1?"),
  prompt("Lets's make pasta! Ingredient 2?"),
  prompt("Lets's make pasta! Ingredient 3?"),
];
console.log(...ingredients);

const restaurant1 = {
  r_name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  orderPasta: function (ing1, ing2, ing3) {
    //New ES6 syntax
    console.log(
      `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
    );
  },
};

restaurant1.orderPasta(...ingredients); //Use spread operator
//The the commas between arguments are addded automatically

// =========Objects(Even though not iterals)=========

//Copying an Object

const newRestaurant = { FoundedIn: 1998, ...restaurant, founder: 'Adwaith' };
console.log(newRestaurant);

//Changing the copy object without affecting other

const restaurantCopy = { ...restaurant };
restaurantCopy.r_name = 'Lake Palace';
console.log(restaurantCopy);