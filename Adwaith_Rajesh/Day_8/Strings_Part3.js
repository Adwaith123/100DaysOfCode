console.log('a+very+nice+string'.split('+')); //['a', 'very', 'nice', 'string']
console.log('Adwaith Rajesh'.split(' ')); //['Adwaith', 'Rajesh']

const [firstName, lastName] = 'Adwaith Rajesh'.split(' ');
console.log(firstName, lastName); //Adwaith Rajesh

// join-method

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');

console.log(newName); //Mr Adwaith RAJESH

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); //Another_Way
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('adwaith rajesh');
capitalizeName('krishnankutty ambalathamkunnel');

//--------------------Padding

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); //+++++++++++Go to gate 23! now the length of the string should be 25

console.log('Adwaith'.padEnd(25, '-'));

console.log(message.padStart(23, '+').padEnd(30, '-'));

//Real-world--Application

const maskcreditCard = function (number) {
  const str = number + '';
  console.log(str.length);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskcreditCard(4533952369855596));
console.log(maskcreditCard('758856698536695'));

//Repeat

const message2 = 'Bad weather............. All departures Delayed ';

console.log(message2.repeat(2));

const planesInLines = function (n) {
  console.log(`There are ${n} planes in line ${'⌚'.repeat(n)}`);
};

planesInLines(5);
planesInLines(3);