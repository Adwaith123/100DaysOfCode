// ======Primitives vs. Objects (Primitive vs. Reference Types)=========

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);

====Primitive Values====

let lastName = 'KS';
let oldLastName = lastName;
lastName = 'Amal';

console.log('lastName', lastName);
console.log('OldLastName', oldLastName);

// =====Object - Reference Values  - =====

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJesssica = jessica;
marriedJesssica.lastName = 'Davis';
//This is not a a new object in the heap a reference to already created object

console.log('before_marriage', jessica);
console.log('after_marriage', marriedJesssica);

// ==Copying Objects==

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //ONly create a shallow copy doesent create a deep clone
jessicaCopy.lastName = 'Davis';
jessicaCopy.age = 30;

jessicaCopy.family.push('Mary'); //The above object is only works in level 2..In the case of highly nested objects it will not work
jessicaCopy.family.push('John');

console.log('before_marriage', jessica2);
console.log('after_marriage', jessicaCopy);


