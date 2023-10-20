'use strict';

// Constructor function starts witha capital Letter && Arrow function cannot be used

// --------------Constructor Function-----------

const Person = function (firstName, birthYear) {
  //Instance Properties
  this.name = firstName;
  this.dob = birthYear;

  // Never create a method inside a constructor function
  /*
  this.calcAge = function (birthYear) {
    console.log(2037 - this.birthYear);
  };
  */
}; // --------Blue print of a house-----------

// 4. Steps that the new keyword does

// 1. New {} is created
//2. function is called , this = {}
//3. {} linked to prototype
// 4. function automatically return {}

// Creating Objects
const jonas = new Person('Jonas', 1991);
console.log(jonas); //-------Actual House--------

const adwaith = new Person('Adwaith', 1999);
console.log(adwaith); //Person {name: 'Adwaith', dob: 1999}

//Here jonas an adwaith is an instance of Person

const pappu = 'pappu';
console.log(jonas instanceof Person); // true
console.log(pappu instanceof Person); // false


// ------------------------------------------Repeat  ------------------------------------------------------

const Person = function (firstName, birthYear) {
  //console.log(this); // Person {} ==> name of the constructor function
  this.firstName = firstName; //==> setting the properties
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// Working

// 1. new {} is created
//2. function is called , this = {}
//3.{} is linked to a prototype
//4.function automatically return the object {}

//Creating new Objects based on constructor function

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1999);

console.log(matilda); //Person {firstName: 'Matilda', birthYear: 2017}
console.log(jack);

console.log(jonas instanceof Person); // true

// Adding methods to an Object

const Student = function (firstName, birthYear) {
  //console.log(this); // Person {} ==> name of the constructor function
  this.firstName = firstName; //==> setting the properties
  this.birthYear = birthYear;

  // Never create a function inside a constructor
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const adwaith = new Student('Jonas', 1991);
console.log(adwaith);
console.log(adwaith.calcAge()); // 46
