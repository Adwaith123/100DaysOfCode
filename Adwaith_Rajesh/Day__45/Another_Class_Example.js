// 222.Another class Example with Abstraction

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];                             // properties not based on any inputs
    this.locale = navigator.language;

    console.log(`Thanks for opening a account , ${this.owner}`);
  }
  //Public interface of our objetcs
  deposits(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposits(-val); // Accessing other methods from other methods
  }
  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposits(val);
      console.log('Loan Approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 111, []);

//acc1.movements.push(250); // It is always good to interact via methods
//acc1.movements.push(-140);

acc1.deposits(250);
acc1.withdraw(550); // small abstraction of avoiding '-' symbol
acc1.requestLoan(1025);
console.log(acc1);