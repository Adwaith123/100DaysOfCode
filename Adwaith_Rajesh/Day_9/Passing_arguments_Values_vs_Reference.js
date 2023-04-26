// How passing Arguments Works Values vs Reference

//Note : In this example it defines how the reference of an object can inturn cause problems by usig that object at different functions

const flight = 'LH1458';
const adwaith = {
  name: 'Adwaith Rajesh',
  passport: 24529625848,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 24529625848) {
    alert('Check in');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, adwaith);
console.log(flight);
console.log(adwaith);

//The above is the same as

//const flightNum = flight; Here creating a new copy to a newly created variable
//const passenger = adwaith Here the passenger object is referencing adwaith object and reflecting the changes

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(adwaith);
checkIn(flight, adwaith);

//Note: JavaScript does not have passing by reference(Concept of pointers)