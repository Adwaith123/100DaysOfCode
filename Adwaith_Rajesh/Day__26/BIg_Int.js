// Working with Bigint --> a primitive type

console.log(2 ** 53 - 1); //9007199254740991 --> largest number javascript can print

console.log(Number.MAX_SAFE_INTEGER);

console.log(58785151217853244545475623n); // n represent a bigint

console.log(BigInt(6556656595));

//BigInt operations

console.log(10000n + 10000n);
console.log(157865548841545115515144451784477454455415n * 44521545215151515n);

const huge = 545487595626962689887689655625652n;
const num = 23;
console.log(huge * BigInt(num));

//Exception-cases
console.log(20n > 15); //true  (type coresion)
console.log(20n == '20'); // true
console.log(20n === 20); //false

console.log(huge + ' is Really big');

//Divisions

console.log(10n / 3n); //3n
console.log(10 / 3); // 3.333