// ----------215. Static Methods------------------

Array.from(document.querySelectorAll('h1')); //[h1]
//[1, 26, 5].from(); // error

// here from is a function that is attached to the Array constructor itself not on the object

Number.parseFloat(12); // Static method bind on to the Number constructor

// Adding static method

// -----------For constructor function

const Human = function (firstName, birthYear) {
  //console.log(this); // Person {} ==> name of the constructor function
  this.firstName = firstName; //==> setting the properties
  this.birthYear = birthYear;
};

const babu = new Human('Babu', 1991);
console.log(babu);

//------------Prototype-------------------

Personcl.prototype.greet = function () {
  console.log(`Hey ${this.name}`);
};
// -----------------Static-below--------------------

Human.hey = function () {
  // Person is a class
  console.log(`Hey there 😀`);
  console.log(this);
};

Human.hey();
//babu.hey(); // if we created babu object , Hey is not in the prototype of jonas object

// -----------For class

class PersonalInfo {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.YearOfBirth = birthYear;
  }
  //Method will be added to the .prototype property of the constrctor
  // Called as Instance method
  calcAge() {
    console.log(2037 - this.YearOfBirth);
  }
  get age() {
    console.log(2037 - this.YearOfBirth);
  }

  // Adding static method
  static hey = function () {
    console.log(`Hey there 😀`);
    console.log(this); // Points to entire class
  };
}

const arshitha = new PersonalInfo('arshitha rajesh', 1998);
console.log(arshitha); //PersonalInfo {fullName: 'arshitha rajesh', YearOfBirth: 1998}
arshitha.calcAge(); // 39
arshitha.age; // set it as property // 39

PersonalInfo.hey();