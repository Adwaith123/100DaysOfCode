// forEach With Maps and Sets

// --------------------Maps-----------------------

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// ---------Sets-----------

const currrenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR']);
console.log(currrenciesUnique); // Set(3) {'USD', 'GBP', 'EUR'}

currrenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Here the key is exactly same as the values.Because it doesn't have keys.It happens because inorder to maintain same structure of forEach set is not excluded from regular format

// --The getaround this problem is that we can now use throw away variable

/*
currrenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

// |-----------|
// |  OutPut : |
// |-----------|

//USD: USD
//GBP: GBP
//EUR: EUR