//Default-Parameters..........and how to skip parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = numPassengers * 189
) {
  //Older ES-5 Way
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); //{flightNum: 'LH123', numPassengers: 1, price: 189}
createBooking('LH123', 2, 800); //{flightNum: 'LH123', numPassengers: 2, price: 800}
createBooking('LH128', 5); //{flightNum: 'LH128', numPassengers: 5, price: 945}
createBooking('LM862', undefined, 5); //{flightNum: 'LM862', numPassengers: 1, price: 5}