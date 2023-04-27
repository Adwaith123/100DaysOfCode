//The Call and apply method

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

lufthansa.book(239, 'Adwaith Rajesh');
lufthansa.book(635, 'Arshitha Rajesh');
console.log(lufthansa);

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// -----------Call-Method------------

const book = lufthansa.book; //Storing a function to a new variable

//The below function-call does not work

//book(23, 'Dilna David'); //Very important part.Because here in the new function the "this" keyword is now pointing  to nowhere

book.call(euroWings, 23, 'Sarah Williams'); //----------------Very

//Important---In the above code first parameter (euroWings, 23, 'Sarah Williams') "euroWings refers to the this keyword in that function"

console.log(euroWings);

book.call(lufthansa, 239, 'John Cooper');

// ----------Apply-Method-------------An alternative to call but not used mostly in modern programming

const flightData = [586, 'Saradha KrishnanKutty'];
book.apply(euroWings, flightData);

book.call(euroWings, ...flightData); //Spreading out the parameters.