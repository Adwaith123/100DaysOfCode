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

console.log(containerMovements.innerHTML);
/////////////////////////////////////////////////

//-------------------Code from Day__2----------------------
// ---------------------Map-Method---------------

/*
//Using map to shorten the name
const createUsername = user => {
  const username = user
    .toLowerCase()
    .split(' ') // Here split method returns an array
    .map(name => {
      //Here we can join map with split because split returns an array
      return name[0];
    })
    .join('');
  return username;
};

console.log(createUsername('Steven Thomas Williams'));

*/

// Below is a function that is used to shorten {username} maes of the accounnt holder

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

createUsername(accounts);
console.log(accounts);

// -----------------The filter method---------------
// -----Emphasising on how to use call-back function

const movements = [430, 1000, 700, -680, 50, 90, -200, -912];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits); //Output: (5) [430, 1000, 700, 50, 90]

const depositFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositFor.push(mov);
  }
}
//Output://[430, 1000, 700, -680, 50, 90]
// Ans : The reason for that is because if we are not creating new array
// the length of the array is decreasing during each iterartion

console.log(depositFor);

// -------------Filter method to store all the details of the withdrawal--

const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals); //OutPut : [-680, -200, -912]