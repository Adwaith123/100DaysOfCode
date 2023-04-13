// -------Short-Circuiting--------
// Logical operators can use any data type and they can return any data type and they can do short circuiting

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

console.log(3 || 'adwaith'); //return the truthy value ie, 3

console.log(true || 0); // true
console.log('' || 'adwaith'); // adwaith
console.log(undefined || null); //null

console.log(undefined || 0 || 'adwaith' || 23);

//restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
//if restaurant.numGuests exists the the value of it should be restaurant.numGuests otherwise it should be 10
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//Using with the AND Opeartor

console.log(0 && 'Jonas'); // As long as the truthy value is find the evaluvation countinues..If it find false it stop there and display it
console.log(7 && 'Jonas');
console.log(0 && false);

console.log('Hello' && 23 && null && 'Jonas'); //null

if (restaurant.orderPizza) {
  //Checking if its exists
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza &&
  restaurant.orderPizza('mushrooms', 'spinach', 'cucumber');

//Here if the orderPizza exists then we can call that function using the shortcircuit opeartor