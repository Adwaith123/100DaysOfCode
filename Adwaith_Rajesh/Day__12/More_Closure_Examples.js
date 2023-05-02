// -----------More_Closure_Examples--------------------

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
//Reassingning f function

h();
f();

console.dir(f);

// 2nd Example for Closure in action

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    //Here the functiom inside setTimeout is executed on a global scope.

    //Here this call-back function called completely independant from the board passsenger function

    console.log(`We are now boarding all ${n} Pasengers`);
    console.log(`There are 3 groups,each with ${perGroup} passengers`);
  }, wait * 1000); //Converting into milliseconds
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

// setTimeout example

//setTimeout(function () {
// console.log(`Adwaith Rajesh`);
//}, 1000);