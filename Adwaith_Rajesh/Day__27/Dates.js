// Create a Date

const now = new Date();
console.log(now);

console.log(new Date('May 05,1999')); //Javascript is parsing out the string  Output : Wed May 05 1999 00:00:00 GMT+0530 (India Standard Time)

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31)); // Monh in javascript is zero based {starts with 0-11.}

console.log(new Date(2037, 10, 31)); //autocorrect november 31 to december 1

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // converting days into milliseconds.

//Working with Dates

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); // follow some kind of internaoional standard
console.log(future.getTime()); // Output : 2142237180000

console.log(new Date(2142237180000)); //Thu Nov 19 2037 15:23:00 GMT+0530 (India Standard Time)

console.log(Date.now());
console.log(new Date(1688051219915)); //Thu Jun 29 2023 20:36:59 GMT+0530 (India Standard Time)

future.setFullYear(2040);
console.log(future); //Mon Nov 19 2040 15:23:00 GMT+0530 (India Standard Time)