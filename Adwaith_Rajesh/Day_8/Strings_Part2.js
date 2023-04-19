// -----Countinuing with simple string methods

// changing the case of a string

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //Jonas

//challenge = Write a function to do the above name correction

//comparing-emails

const email = 'hello@gjonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

//console.log(trimmedEmail); //hello@jonas.io

const normalizedEmail = loginEmail.toLowerCase().trim();
// How the above line work   [loginEmail.toLowerCase()]this will return a string and then trimmed method is used on that string.trim();

console.log(normalizedEmail); //hello@jonas.io