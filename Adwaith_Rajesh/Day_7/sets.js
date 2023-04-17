// -----------------------Sets

// In Es6 two more data structures is introducted they are sets and maps

// ---->Sets is a collecion of unique values.That means it canot have any duplicate values

const orderSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pizza', 'Pizza']);
console.log(orderSet); //Set(3) {'Pasta', 'Pizza', 'Risotto'}

console.log(new Set('Adwaith')); //Set(7) {'A', 'd', 'w', 'a', 'i', …}

console.log(orderSet.size); //3

// Set methods

console.log(orderSet.has('Pizza')); //true
console.log(orderSet.has('Bread')); //false
orderSet.add('Garlic Bread'); //Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
orderSet.delete('Risotto');
//orderSet.clear();

// How to retrive values from sets.?
// answer: There is no method to retrive values from sets.because it contain all unique values..If needed use has method.

// sets are iterable,means that we can loop over them

for (const order of orderSet) console.log(order); // Pasta Pizza Garlic Bread

// example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)]; //Unpack this entire set into newly array

console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Ambalathamkunnel').size);