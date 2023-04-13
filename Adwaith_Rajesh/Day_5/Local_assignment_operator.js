//Local Assignment Operator

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};

// Using OR Operator for the avbove case

// Making use of Short circuiting

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10; //If false then it will add new object and add the value defined

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10; //nullish assignment operator (null or undefined)

console.log(rest1);
console.log(rest2);

//Logical AND operator

rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

console.log(rest1); //{name: 'Capri', numGuests: 0, owner: undefined}
console.log(rest2); //{name: 'La Pizza', owner: '<ANONYMOUS>'}

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1); //{name: 'Capri', numGuests: 0}
console.log(rest2); /// {name: 'La Pizza', owner: '<ANONYMOUS>'}
