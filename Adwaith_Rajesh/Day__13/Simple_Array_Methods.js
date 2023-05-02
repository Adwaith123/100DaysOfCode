let arr = ['a', 'b', 'c', 'd', 'e'];

// --------Slice Method------------

console.log(arr.slice(2)); //Here 2 is the beginining parameter
//returns : (3) ['c', 'd', 'e']

console.log(arr.slice(2, 4)); //['c', 'd']

console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1));
console.log(arr.slice(1, -2)); //['b', 'c']

// Creating a shallow copy

console.log(arr.slice());
// or
console.log([...arr]);

//Splice-Method

arr.splice(2); //['c', 'd', 'e']
arr.splice(-1); //(4) ['a', 'b', 'c', 'd']

arr.splice(1, 2); //(3) ['a', 'd', 'e'] 
//From position->1 . 2 elements are deleted

console.log(arr);

//------------Reverse----------

const arr2 = ['a', 'b', 'c', 'd', 'e'];

console.log(arr2.reverse()); //(5) ['e', 'd', 'c', 'b', 'a']
console.log(arr2); // (5) ['e', 'd', 'c', 'b', 'a']
// Here the reverse method will mutate the array

//Concat-Method

const arr3 = ['f', 'g', 'h', 'i', 'j', 'k'];
const letters = arr.concat(arr3);
console.log(letters); //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']

console.log(...arr, ...arr3); //a b c d e f g h i j k

// ----------------Join-----------

console.log(letters.join('-')); //a-b-c-d-e-f-g-h-i-j-k
