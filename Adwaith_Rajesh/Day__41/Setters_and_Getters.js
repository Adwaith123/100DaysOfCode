//--- ----------214. Setters and Getters-----------

const account = {
  owner: 'jonas',
  movements: [200, 356, 554, 201, 558, 651],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    // all setters must have a argument
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;

console.log(account.movements);

//Classes too have getters and setters

class Personal {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.YearOfBirth = birthYear;
  }
  //Method will be added to the .prototype property of the constrctor
  calcAge() {
    console.log(2037 - this.YearOfBirth);
  }

  get age() {
    return 2037 - this.YearOfBirth;
  }
  // Set a property thta already exist
  set fullName(name) {
    // all setters must have a argument
    if (name.includes(' ')) this._fullName = name; // _ is a convention
    else alert(`Given ${name} is not a fullname`);
  }
  get fullName() {
    return this._fullName;
  }
}

const adwaith = new Personal('adwaith rajesh', 1999);
console.log(adwaith);
adwaith.calcAge(); //38  {-------------Method---- }
//---------------> Difference between setters and normal method
console.log(adwaith.age); // 38 {---Property----}

const walter = new Personal('Walter', 1862);

console.log(adwaith.age); // a getter