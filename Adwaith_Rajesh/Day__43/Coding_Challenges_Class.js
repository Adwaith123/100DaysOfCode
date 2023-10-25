
// COding Challnenge using constructor functions

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at  ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at  ${this.speed} km/h`);
};

const Bmw = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

Bmw.accelerate();
Bmw.accelerate();
Bmw.brake();
Bmw.accelerate();
Bmw.accelerate();

// Coding challenge using ES6 classes


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at  ${this.speed} km/h`);
  };

  brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at  ${this.speed} km/h`);
  };
  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const Ford = new CarCl('FORD', 120);
console.log(Ford);
Ford.speedUS = 50;
console.log(Ford.speed);
Ford.accelerate();
Ford.brake();
console.log(Ford);