// -----------------The Bind Method----------

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name }); //Here we do not write name:name because the key&
    //the_ value v_name is same
  },
};

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// book.call(lufthansa, 239, 'John Cooper');

const book = lufthansa.book;

const bookEW = book.bind(euroWings);
bookEW(23, 'Steven Williams');
const bookLH = book.bind(lufthansa);
bookLH(256, 'Adwaith Rajesh');

console.log(euroWings);
console.log(lufthansa);

//Alreday predefining a function which only accept required parameter to the book function

const bookEW23 = book.bind(euroWings, 23);

bookEW23('Amjunath');
bookEW23('Amareesh K.');

// With event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// Here in the below code the this keyword will always point to the event handler that is button elemenet

//document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

//------To overcome this We write

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial-Application for bind_method

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23); //Order of the parameter is important

// addTax = (rate, value) => value + value * 0.23;
console.log(addVat(320));
console.log(addVat(500));
console.log(addVat(823));

// Using bind method actually gives u sthe opperchunity to create a new function . Thereby helping us to modifybthe existin function

const hello = greeting => name => console.log(`${greeting} ${name}`);

hello('Hello')('Adwaith');

//-------------Challenge--To write the above code in function inside function

const finalTax = rate => value =>
  console.log(`Final Tax for the goods is given by ${value + value * rate}`);

//finalTax(0.23)(300); //Final Tax for the goods is given by 369

const productTax = finalTax(0.23);
productTax(823); //Final Tax for the goods is given by 1012.29.
