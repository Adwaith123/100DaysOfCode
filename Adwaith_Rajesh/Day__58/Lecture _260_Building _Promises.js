// Lecture 260: Building a Simple Promise

//Promise ---> called promise constructor

// resolve function ==> to say the promise is fulfilled

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottery Draw is happening 🔮`);
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Win 💰');
    } else {
      reject(new Error(`You lost your Money 🤢`));
    }
  }, 2000);
});

//Consuming the promise that we built

// -----New Way ----------------------
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Output: the output will be based on the value>0.5 . if it is fullfilled the output promise will be of what inside resolve  function or otherwise vicervera


// Promisifying SetTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log(`1 second passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`2 second passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`3 second passed`);
    return wait(1);
  });

// -----Old Way ----------------------
// setTimeout(() => {
//   console.log('1 second passed ');
//   setTimeout(() => {
//     console.log('2 second passed ');
//     setTimeout(() => {
//       console.log('3 second passed ');
//     }, 1000);
//   }, 1000);
// }, 1000);

//  static method on promise constructor , and resolve immediately

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem !!!')).catch(x => console.error(x));