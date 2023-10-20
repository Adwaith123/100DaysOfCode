// ------------------------Prototypes (Or prototypal inheritance)-----------------

// prototype is actually an object

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge(); // 46
matilda.calcAge(); // 20

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // true !important

console.log(Person.prototype.isPrototypeOf(jonas)); // true

console.log(Person.prototype.isPrototypeOf(Person)); //false

//prototype = .prototypeOfLinkedObjects

// Setting properties on prototypes

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));