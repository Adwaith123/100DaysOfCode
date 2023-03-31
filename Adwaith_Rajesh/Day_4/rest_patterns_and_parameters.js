//=====Rest Patterns and Parameters===

//================part-1 Destructuring====

const arr = [1, 2, ...[3, 4]]; //Spred operator is on  the right side of the assignment operator

const [a, b, ...others] = [1, 2, 3, 4, 5]; //Rest pattern because operations i on the right side

console.log(a, b, others);

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
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients, otherIngredients);
  },
};

// ===Testing in Arrays===

const [a, , b, ...Others] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(a, b, Others);

// ====Objects===

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// ================part-2 Functions===============

const add = function (...numbers) {
  // pack the value using rest
  //numbers will create an array
  //use of rest patterns in function
  let sum = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    sum = sum + numbers[i]; //We cannot decare sum here beacus e it will create a block scope
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 8, 6);
add(8, 3, 9, 5, 26, 95, 6);

const x = [23, 5, 85];
add(...x); //unpack the values using spred

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroom');