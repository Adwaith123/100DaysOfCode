// -----Working with Strings

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

//String methods

console.log(airline.indexOf('r')); //6
console.log(airline.lastIndexOf('r')); //10
console.log(airline.indexOf('ortugal')); // -1 because here strings are casesensitive

// Extracting parts
console.log(airline.slice(4)); //Air Portugal   4 is the position at which extraction will start

console.log(airline.slice(4, 7)); //Air

console.log(airline.slice(0, airline.indexOf(' '))); // Tap indexOf(first_space_occurance)
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //console.log(airline.slice(8)); => displays -> portugal

console.log(airline.slice(-2)); // al(displays last two letters of portugal)
console.log(airline.slice(1, -1));
//AP Air Portuga

const checkMiddileSeat = function (seat) {
  //B and E are Middle_seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the Middle-Seat 🤢');
  else console.log('you got lucky 🥳');
};

checkMiddileSeat('11B');
checkMiddileSeat('23C');
checkMiddileSeat('3E');