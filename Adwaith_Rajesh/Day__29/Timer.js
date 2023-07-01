//setTimeout function

setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza with ${ing1} & ${ing2}`),
  3000,
  'olives',
  'spinach'
);

console.log('Waiting.........');


// how to clear timer function

const ingredients = ['olives', ''];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza with ${ing1} & ${ing2}`),
  1500,
  ...ingredients
);


console.log('Waiting.........');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);


//SetInterval(creating a clock)

setInterval(function () {
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    day: 'numeric',
    month: 'long', // 2-digit
    weekday: 'long',
  };
  const clock = new Intl.DateTimeFormat('en-GB', options).format(now);
  console.log(clock);
}, 1000);