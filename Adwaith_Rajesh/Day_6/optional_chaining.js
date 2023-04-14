//------------Optional-Chaining

console.log(restaurant.openingHours.mon.open); //script.js:775 Uncaught TypeError: Cannot read properties of undefined (reading 'open')

if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open); // 11

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon); // here it wil not give undefined thats why we need optional chaining..It will not diplays anything

if (restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

// with optional-chaining and  how it work
// ===========================================================
console.log(restaurant.openingHours.mon?.open); //if open does not exist it will give you undefined..?-> is used to do optional chaining

console.log(restaurant.openingHours?.fri?.open); //first check if openingHours exit then check if fri-objects exist..If exist the display open

// Optional-chaining-example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const opens = restaurant.openingHours[day]?.open ?? 'closed'; //use of nullish coalescing operator together with optional-chaining ---to avoid display close insted of 0
  console.log(`On ${day},we open at ${opens}`);
}

//methods

console.log(restaurant.order?.(0, 1) ?? 'method does not exist');

console.log(restaurant.orderRisottto?.(0, 3) ?? 'Method does not exist'); //Here orderRisotto?.(0,3) is simmilar to orderRisotto(0,3)
// '?.'---->is called the optional-chaining

//optional-chaining on array

const users = [{ name: 'adwaith', email: 'adwaithrajesh008@gmail.com' }];

//to check wheater an array is empty or not
console.log(users[0]?.name ?? 'Users array is empty'); //adwaith

// if not done in above way it would have been

if (users.length > 0) console.log(users[0].name);
else console.log('Users array is empty');
