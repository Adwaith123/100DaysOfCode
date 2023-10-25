// Inheritance between classes using COnstructor function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //this.firstName = firstName;
  //this.birthYear = birthYear; // Simply copy of another class , having duplicate code is not a good idea
  Person.call(this, firstName, birthYear); // regular function call
  this.course = course; // In a regular function call this keyword is set to null
};

Student.prototype = Object.create(Person.prototype); // Linking prototypes for inheriting

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();

const adwaith = new Student('adwaith', 1999, 'Mechanical Engineering');

mike.calcAge(); // We can use calcAge because of Inheritance

console.log(mike.__proto__);
//Output:
/* 
Person {introduce: ƒ}
introduce
: 
ƒ ()
[[Prototype]]
: 
Object
calcAge
: 
ƒ ()
constructor
: 
ƒ (firstName, birthYear)
[[Prototype]]
: 
Object
*/

console.log(mike.__proto__.__proto__);

//onsole.dir(Student.prototype.constructor);
//Should point to STudent but here it point person because of object .prototype.

console.dir(Student.prototype.constructor);

//Correcting it by pointing the prototype to correct constructor function

// {
//   Student.prototype.constructor = Student;
// }

console.log(mike instanceof Student); //true
console.log(mike instanceof Person); //true