//----The new {at} method -----

const arr1 = [23, 11, 64];

console.log(arr1[0]); //Traditional Method
//or
console.log(arr1.at(0)); // Es-2022 Method

// Getting out the first value in an array

console.log(arr1[arr1.length - 1]); //64

console.log(arr1.slice(-1)[0]); //64 // Here [0] indiactes taking out the first value.

console.log(arr1.at(-1)); //64 {Counting from the end of the array}

// Here at method also works on string

console.log('Adwaith'.at(-1)); // h