//224. Encapsulation:_Private_Class_Fields_and_Methods

// 1. public fields
//2. Private fields
//3. public methods
//4. private methods
// {There is also the static versions}

class Account {
  //----------1.Public field------ (instances) they are also referencible by the this leyword
  locale = navigator.language;

  //-----2.Private Field----------(instances)-
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening a account , ${this.owner}`);
  }
  //---------------- 3. public methods--------------

  //Public interface of our objetcs
  getMovements() {
    return this.#movements;
  }
  _approveLoan(val) {
    // No browse actually supported
    return true;
  }
  deposits(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposits(-val); // Accessing other methods from other methods
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposits(val);
      console.log('Loan Approved');
    }
  }
  static helper() {
    console.log('static');
  }
  // 4. -------private methods---------------
  // To hide the implemenattion details from outside
  // #approveLoan(val) {
  //   // No browse actually supported
  //   return true;
  // }
}

const acc1 = new Account('Jonas', 'EUR', 111, []);

acc1.deposits(250);
acc1.withdraw(550); // small abstraction of avoiding '-' symbol
acc1.requestLoan(1025);
console.log(acc1.getMovements());
console.log(acc1);

console.log(acc1.movements); // Private class cannot be acceses in the instances or {Objects}

console.log(acc1.pin); // output: udefine

//Testing static method

// Account.helper();
