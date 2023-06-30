console.log(23 === 23.0);

//Base 10-0 to 9.1/10 = 0.1.3/10 = 3.333333
//Binary base 2 - 01

console.log(0.1 + 0.2); // problems of javascript in number calculation
console.log(0.1 + 0.2 === 0.3); //false

console.log(Number('23'));
console.log(+'23'); // can replace Number with '+' due to type coresion

//Parsing

console.log(Number.parseInt('30px', 10)); // For this to work the string must start witha number , 10 is radix ie, base{decimal_base}

console.log(Number.parseInt('e23', 10)); // will not work , Output :NaN

console.log(Number.parseFloat('2.5rem')); // 2.5

console.log(parseFloat('2.5px')); // traditional way ,not preffered

console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20X')); //true
console.log(Number.isNaN(23 / 0)); //false

// Best way checking if value is a number

console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20X')); //false

console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23 / 0)); //false

//Math and rounding

console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //2

console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, '23', 11, 2)); //23
console.log(Math.max(5, 18, '23px', 11, 2)); // Nan

console.log(Math.min(5, 18, 23, 11, 2)); //2

//To calculate the area of a circle with 10px radius
console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.15

//To generate random integers

console.log(Math.trunc(Math.random() * 6) + 1);

//To generate random numbers between the specified limit

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
//Avoid using trunc use floor
console.log(randomInt(1, 20));

//Rounding integers

console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));
console.log(Math.floor('23.9'));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//Rounding Decimals

console.log((2.7).toFixed(0)); //Output: 3Always return a string
console.log((2.7).toFixed(3)); //2.700
console.log((2.745).toFixed(2)); //2.75

console.log(+(2.745).toFixed(2)); //2.75 {Output as a number(violet color)}