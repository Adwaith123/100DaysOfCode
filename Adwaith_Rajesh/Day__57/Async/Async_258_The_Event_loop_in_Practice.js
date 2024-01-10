// -Lecture 258---The Event loop in Practice--

/*

console.log('Test Start');
setTimeout(() => console.log('0 second timer '), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
console.log('Test end ');

// Output: Test Start
//         Test end
//         Resolved promise 1
//         second timer

*/

console.log('Test Start');
setTimeout(() => console.log('0 second timer '), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 100000; i++) {}
  console.log(res);
});
console.log('Test end ');