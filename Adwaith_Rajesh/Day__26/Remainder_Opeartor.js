// The remainder operator

console.log(5 % 2);
console.log(5 / 7); //5 = 2*2+1;
console.log(8 % 3);
console.log(8 / 3); // 8 = 2*3+2;

console.log(6 % 2);
console.log(6 / 2); // to check wheather a number is odd or even

const isEven = n => n % 2 === 0; // if the function condition is equal then it will return true otherwise false

console.log(isEven(8));
console.log(isEven(7));
console.log(isEven(514));

//Example usage of remainder

labelBalance.addEventListener('click', function (e) {
  e.preventDefault();
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});