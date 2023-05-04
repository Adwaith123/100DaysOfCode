// ---The Map Method-----

const euroToUsd = 1.1;

/*

const movementsUSD = movements.map(function (mov) {
return mov * euroToUsd;
}); // This procedure is more inLine with functional programming

*/
// ------------using arrow function for map method--------

const movementsUSD = movements.map(mov => mov * euroToUsd);

//map is also got aces to all the 3 parameters that the forEach has

console.log(movements);
console.log(movementsUSD);

// ---------------using for-of Loop-----------

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}

console.log(movementsUSDfor);

// Proof of map is also got aces to all the 3 parameters that the forEach has

const movementsDescription = movements.map((mov, index) => {
  return `Movement ${index + 1}: 
  You ${mov > 0 ? `Deposited` : `Withdew`} ${Math.abs(mov)}`;
});

console.log(movementsDescription);

/*
-------------------------Note:------------------
 The above code is essentailly the same thing  what we done with the forEach but there is big
 difference that is {The forEach lop creates sideEffects}.
 That is , => Here in forEach during each iteration statemenst is printed line by line 
 But Here the whole thing is returned as array.-------------

 */