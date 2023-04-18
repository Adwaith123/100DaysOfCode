// ---------------------Iteration through maps

const question = new Map([
  ['question', 'What is the best programming language in the world.?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct 👍'],
  [false, 'Try Again'],
]);

console.log(question);

//Convert object to maps

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Looping through maps using for loop

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));

console.log(question.get(question.get('Correct') === answer));

//---------------------------How this is working

// --------------------console.log(question.get(true));--Very Important

// Converting map to an array

console.log([...question]);
console.log([...question.entries()]); //output is same as the above
console.log([...question.keys()]);
console.log([...question.values()]);
