// -----Lecture : 211 : Prototypal Inheritance on Built-In Objects

const Person = function (firstName, birthYear) {
  //console.log(this); // Person {} ==> name of the constructor function
  this.firstName = firstName; //==> setting the properties
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const jonas = new Person('Jonas', 1991);

Person.prototype.species = 'Homo Sapiens';
console.log(jonas);

console.log(jonas.__proto__);

// Output : {species: 'Homo Sapiens', calcAge: ƒ, constructor: ƒ}
//Object prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …} --proto type of objects

console.log(jonas.__proto__.__proto__.__proto__); // null

console.log(Person.prototype.constructor);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 85, 4, 2, 8, 2, 6, 8];

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Creating a new method to an array
Array.prototype.unique = function () {
  return [...new Set(this)]; // this keyword refers to the array
};

console.log(arr.unique()); // [3, 6, 85, 4, 2, 8]

const h1 = document.querySelector('h1');
// Here h1 is an object with a lot of methods made available