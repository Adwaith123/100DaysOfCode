'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovemnets = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
          </div>
          <div class="movements__value">${mov}</div>
        </div> 
          `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovemnets(account1.movements);

const createUsername = accs => {
  // Here acc is an array of objects
  accs.forEach(function (acc, i) {
    acc.username = acc.owner // And here acc is a object containing information about that user
      .toLowerCase()
      .split(' ')
      .map(name => {
        //Here we can join map with split because split returns an array
        return name[0];
      })
      .join('');
    console.log(
      `${i + 1} : ${acc.owner} and their username is : ${acc.username}`
    );
  });
};

//createUsername(accounts);
//console.log(accounts);

// Below code is the new addition

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

//accumeulator is like a snowball

const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + curr;
}, 0); // 0 specifying starting point of the accumulator

//The above code can be also written as

const balance1 = movements.reduce((acc, curr) => acc + curr, 0);
console.log(balance1); //ouputs: 3840

// Using for loop

let balance2 = 0;

for (const mov of movements) {
  balance2 += mov;
}

console.log(balance2); //ouputs: 3840


// Maximum value of movemensts array

const movements = [200, -200, 340, -300, -20, 680, 50, 400, -460];

const maxNumber = movements.reduce((acc, curr) => {
  if (acc > curr) return acc;
  else return curr;
}, movements[0]);

console.log(maxNumber);
