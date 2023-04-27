// ------------Functions_Returning_Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Convertig the above function using arrow function

//const greet = greeting => name => console.log(`${greeting} ${name}`)

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas'); //Functions returning another function