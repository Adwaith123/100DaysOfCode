const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
  adwaith: 150,
};
const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpese = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  /*
  let limit;
  if (spendingLimits[user]) {
    limit = spendingLimits[user];
  } else {
    limit = 0;
    //------------Another way using ternary operator-------------

  const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  }
  */
  //------------Using option Chaining and nullish coaelesing----------------

  // const limit = spendingLimits?.[user] ?? 0;

  //After refactoring to function

  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });
  }
};
addExpese(10, 'Pizza 🍕');
addExpese(100, 'Going to movies 🍿', 'Matilda');
addExpese(120, 'Photography 📷', 'adwaith');
addExpese(200, 'Stuff', 'Jay');

const checkExpenses = function () {
  /*
    let limit;
    if (spendingLimits[entry.user]) {
      limit = spendingLimits[entry.user];
    } else {
      limit = 0;
    } */
  // const limit = spendingLimits?.[entry.user] ?? 0;

  // After Refactoring

  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)}' / '` : '';
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

logBigExpenses(1000);
console.log(budget);
