// --- Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// -----Explanations----of ----Closures

// -> A function has access to the varible-enviroment (VE) of the execution context in which it was created

// -> VE attached to the function,exactly as it was at the time and place the function was created

// ->We do not have to manually create closures.This is a javascript feature that happens automatically.