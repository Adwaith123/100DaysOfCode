//-------------------- Looping through objects

//Propery Names or keys
const properties = Object.keys(openingHours);
console.log(properties); ///(3) ['thu', 'fri', 'sat']

let openStr = `we are open on ${properties.length} days:`; //we are open on 3 days
//Here  Object.keys(openingHours); act as an array

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);

//Property Values

const values = Object.values(openingHours);
// console.log(values); /(3) [{…}, {…}, {…}]

for (const day of Object.values(openingHours)) {
  console.log(day);
} //{open: 12, close: 22}
// {open: 11, close: 23}
//  {open: 0, close: 24}

// To display key and the values, entries object

const entries = Object.entries(openingHours);
console.log(entries);

//if object is simple we do [key,value]

for (const [key, { open, close }] of entries) {
  //destructuring object and array
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
