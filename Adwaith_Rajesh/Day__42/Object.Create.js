// --------------216. Object.create  another way of writing class-------------------

// Least way of using prototypal Inheritance

//Object.create creates a new  object and the prototype of that object will be the object that we passed in

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    // Nothing to do with the constructor
    this.birthYear = birthYear;
    this.firstName = firstName;
  },
};

// Instantiate
const steven = Object.create(PersonProto);
const adwaith = Object.create(PersonProto);

console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

// adwaith.name = 'Adwaith Rajesh';
// adwaith.birthYear = 1999;
adwaith.init('adwaith', '1956');
adwaith.calcAge();
console.log(adwaith);

// Varifying

console.log(steven.__proto__ === PersonProto); //true