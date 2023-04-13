// Enhanced-Object_Literals

const openingHours = {
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
};

const restaurant1 = {
  r_name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //===================ES6 Enhanced_Object_literals===============
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients, otherIngredients);
  },
};

// 2nd enchancement

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const restaurant2 = {
  r_name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    [weekDays[3]]: {
      //showing advanced-ways to use object-literals
      open: 12,
      close: 22,
    },
    [weekDays[4]]: {
      //showing advanced-ways to use object-literals
      open: 11,
      close: 23,
    },
    [`day-${2 + 4}`]: {
      //showing advanced-ways to use object-literals
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({
    // ============ //A short-hand using object-literals ES6 synatx to write function expression inside an object.Instead of
    /*
    order: function (starterIndex, mainIndex) {
          return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
        },*/
    starterIndex = 2,
    mainIndex = 0,
    time = '21.00', //Adding default values
    address,
  }) {
    console.log(
      `Order recieved Starter: "${this.starterMenu[starterIndex]}" and MainMenu: "${this.mainMenu[mainIndex]}" will be delivered to ${address} at ${time}}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    //A short-hand using object-literals ES6 synatx to write function expression inside an object
    console.log(
      `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
    );
  },
};
