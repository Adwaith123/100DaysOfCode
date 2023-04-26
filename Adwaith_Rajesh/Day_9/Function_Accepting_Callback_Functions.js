//-------Function accepting callback functions(Higher Order Function)

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//The below function takes in afunction as an argument so it is called a higher-order function
const transformer = function (str, fn) {
  console.log(`Original string is given by: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`); // Functions is also having methods
};

//Here upperFirstWord we are only passing the values
transformer('JavaScript is the best!', upperFirstWord);
//Output for each function call is given below
// -------------------Set-1----------------

/*
Original string is given by: JavaScript is the best!
script.js:89 Transformed string: JAVASCRIPT is the best!
script.js:90 Transformed by: upperFirstWord
*/

transformer('JavaScript Is the Best!', oneWord);

//Note: oneWord and upperFirstWord is a call-back function because we do not call them our self but insted we call javascript to bascially tell them later

// -------------------Set-2----------------

/*
Original string is given by: JavaScript Is the Best!
script.js:89 Transformed string: javascriptisthebest!
script.js:90 Transformed by: oneWord
*/

const high5 = function () {
  console.log('🎈');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5); //3🎈

//Why Callback function is really helpfull

/*
1.Its makes it easy to splitup out code into more reusable and interconnected parts

2.Its allow us to create ------abstraction-----.We hide the detail of the code implementation.Simply means it hides the indepth details of the code

*/