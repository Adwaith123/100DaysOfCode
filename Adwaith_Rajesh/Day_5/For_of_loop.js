//The for-of-loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); //(7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']
//for (const item of menu) console.log(item); //item is current element in each iteration

//In for -of loop we can still use continue and break

for (const item of menu.entries()) {
console.log(item);
/*[0, 'Focaccia']
   (2) [1, 'Bruschetta']
  (2) [2, 'Garlic Bread']
  (2) [3, 'Caprese Salad'] etc...*/
//}

for (const [i, el] of menu.entries()) {
  //Destructuring item
  console.log(`${i + 1}: ${el}`);
  //  1: Focaccia
  //  2: Bruschetta
  //  3: Garlic Bread
  //  4: Caprese Salad
  //  5: Pizza
  //  6: Pasta
  //  7: Risotto
}