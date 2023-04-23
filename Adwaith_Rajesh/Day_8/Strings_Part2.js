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

console.log(email === normalizedEmail);//true

//Replacing

const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23.Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
//All passengers come to boarding gate 23.Boarding door 23!
console.log(announcement.replaceAll('door', 'gate'));
//All passengers come to boarding gate 23.Boarding gate 23!

// -----Using regular expression
console.log(announcement.replace(/door/g, 'gate'));
//All passengers come to boarding gate 23.Boarding gate 23!

//Booleans

const planes = 'Airbus A320neo';
console.log(planes.includes('A320')); //true
console.log(planes.includes('Boeing')); //false
console.log(planes.startsWith('Air')); //true

if (planes.startsWith('Airbus') && planes.endsWith('neo')) {
  console.log('Part of the new Airbus');
}

//Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed to get on board');
  } else {
    console.log('Welcome Abroad');
  }
};

checkBaggage('I have a laptop , some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');