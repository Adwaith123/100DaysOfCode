const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//for (const movement of movements)
//  Modified the above loop to find the current index

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// ---ForEach Loop

//For each function does include a callback function

console.log(`--------------forEach----------`);

//Here the parametr of the forEach loop should be very important .
// The first element should be {currentElement},second should be {index} and theird should be the 
//{entire array that we are looping over}

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// Working of forEach loop

//0: function(200)
//1.function(450)
//2.function(400)
//etc...

// When should we use for-of loop & forEach loop

// Answer: First main difference between the two is that forEach loop cannot break out.
//The countinue and break can't be used on a forEach loop.