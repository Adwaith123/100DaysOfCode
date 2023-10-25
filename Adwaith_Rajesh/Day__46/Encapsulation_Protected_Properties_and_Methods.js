// 223.Encapsulation: Protected Properties and Methods({Adding uderscore})

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    //Protected property
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening a account , ${this.owner}`);
  }
  //Public interface of our objetcs
  getMovements() {
    return this._movements;
  }

  deposits(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposits(-val); // Accessing other methods from other methods
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposits(val);
      console.log('Loan Approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 111, []);

acc1.deposits(250);
acc1.withdraw(550); // small abstraction of avoiding '-' symbol
acc1.requestLoan(1025);
console.log(acc1.getMovements());
console.log(acc1);


//------------------------Chaining methods-------------------------------

acc1.deposits(300).deposits(5005).withdraw(35).requestLoan(485).withdraw(820); // reflected  all the elemnts in array;

console.log(acc1.getMovements()); //{public api----> public method to see movements in array} // [250, -550, 1025, 300, 5005, -35, 485, -820]