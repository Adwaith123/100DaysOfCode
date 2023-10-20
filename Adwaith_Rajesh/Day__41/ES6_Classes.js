// ----------------Lecture : 213 : ES6 Classes---------

// Class expression

//const PersonCl = class {};

// Class declaration {Preffered one}
class Personcl {
  constructor(firstName, birthYear) {
    this.name = firstName;
    this.YearOfBirth = birthYear;
  }
  //Method will be added to the .prototype property of the constrctor
  calcAge() {
    console.log(2037 - this.YearOfBirth);
  }
  // No commas between methods

  // greet = function () {
  //   console.log(`Hey ${this.name}`);
  // };
}

const jessica = new Personcl('adwaith', 1991);
console.log(jessica);
jessica.calcAge(); //46

console.log(jessica.__proto__ === Personcl.prototype); //true

Personcl.prototype.greet = function () {
  console.log(`Hey ${this.name}`);
};

jessica.greet(); //Hey adwaith

// 1. Classes are not hoisted
//2. CLasses are first-class citizens
// 3.classes are executed in strict mode