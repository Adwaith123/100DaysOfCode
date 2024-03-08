'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

/*
Object.freeze => is not a depp level freeze
eg: budjet[0].value = 1000; // will change the value 
*/

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
  adwaith: 150,
});

const getLimit = (limits, user) => limits?.[user] ?? 0; // Now it does not depend on outer variables

// ----NOw the function is free frpm side effects {pure function}
const addExpese = function (state, limits, value, description, user = 'jonas') {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBudget1 = addExpese(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpese(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpese(
  newBudget2,
  spendingLimits,
  120,
  'Photography 📷',
  'adwaith'
);
const newBudget4 = addExpese(newBudget3, spendingLimits, 200, 'Stuff', 'Jay');

console.log(`Total Spendings`, newBudget4);

/*
const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user) // Here we use two return blocks because the {}bracket act as a new functional block
      ? { ...entry, flag: 'limit' }
      : entry;
  });

};
  */
//  simplifying the above code

const checkExpenses = (state, limits) => {
  return state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );
};

/*
  for (const entry of state)
    if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
    */

const finalBudget = checkExpenses(newBudget4, spendingLimits);
console.log(`Checking Expenses`, finalBudget);

// Correcting the immutability of varibles
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  console.log(`BigSpendings Are : ${bigExpenses}`);
  // Another way
  //  .reduce((str,curr)=> `${str} ${curr.description.slice(-2)}`, '')
};

logBigExpenses(budget, 1000);
