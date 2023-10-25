// 220.Inheritance using Es6 classes


class Personcl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Method will be added to the .prototype property of the constrctor
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new Personcl('jessica', 1991);
console.log(jessica);
jessica.calcAge(); //46

Personcl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};

jessica.greet(); //Hey jessica

class StudentCl extends Personcl {
  constructor(fullName, birthYear, course) {
    //Always need to happen first
    super(fullName, birthYear); // Super is the constructor function of the parent class , super is resposible for creating the this keyword
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }
  calcAge() {
    // Apear first in the prototype chain
    console.log(
      `I'am ${
        2037 - this.birthYear
      } years old , but now as a student i feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

// Note : And also one thing to note is that we can inherit from one class to another one if we are using the same parameter , thereby avoiding the constructor function

const martha = new StudentCl('Martha Jonas', 1991, 'Computer Science');
martha.introduce();

//console.dir(StudentCl.prototype.constructor); // Class StudentCl

martha.calcAge();

