// --------------Maps------------

// A map is a datastructure that is used to map values to keys,just like objects.And here the keys can hold any type

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze,Italy');
console.log(rest.set(2, 'Lisbon,Portugal'));
//Calling he set method above not only update the value it also returns the map.

//Chaining the set method(updation)
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegiterian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// --------------//console.log(rest);

/*Map(8) {'name' => 'Classico Italiano', 1 => 'Firenze,Italy', 2 => 'Lisbon,Portugal', 'categories' => Array(4), 'open' => 11, …}
[[Entries]]
0:{"name" => "Classico Italiano"}
1:{1 => "Firenze,Italy"}
2: {2 => "Lisbon,Portugal"}
3: {"categories" => Array(4)}
4: {"open" => 11}
5: {"close" => 23}
6: {true => "We are open :D"}
7: {false => "We are closed :("}*/

console.log(rest.get('name'));
console.log(rest.get(true)); //data type matters not every thing is a string
console.log(rest.get(1));

const time = 11;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //We are open :D

// if the value is true true will be displayed an dif the value is false false will be displayed

// Discussing maps properties

console.log(rest.has('categories')); //true
rest.delete(2);
console.log(rest.size); // 7
// rest.clear();

// --------------Using arrays and objects as map keys

rest.set([1, 2], 'Test');

console.log(rest.get([1, 2])); //undefined  // very important exapmle on primitive types basics,theory lecture

// to make it work

const arr = [1, 2];

rest.set(arr, 'Test');

console.log(rest.get(arr)); //[1,2]

rest.set(document.querySelector('h1'), 'Heading');