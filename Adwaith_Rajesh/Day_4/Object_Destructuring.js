// ======Object Destructuring======

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
};

const { r_name, openingHours, categories } = restaurant;
console.log(r_name, openingHours, categories);

const {
  //changing the name of the propery in the original object
  r_name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant; //Setting deafults
console.log(menu, starters);

// Murtating variables with values from objects

let a = 111;
let b = 222;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};

//We cannot use const or let because it will create new already declared varibles

({ a, b } = obj); //when we start a line with curly braces then JS expect a code block.Since we cannot assign anything to a code block.So to solve this we wrap it in prantesis
console.log(a, b);

Nested Objects;

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
};

restaurant.orderDelivery({
  //Passing an object on to the function inside an Object
  time: '22.30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 3,
});

restaurant.orderDelivery({
  address: 'Panukunnel (H), Mannathoor P.O',
  starterIndex: 0,
});

const { r_name, openingHours, categories } = restaurant;
const {
  fri: { open: opening, close: closing },
} = openingHours; //It does not access the openingHous directly but .The openingHours object is already deconsructed into a  varible above.
console.log(opening, closing);