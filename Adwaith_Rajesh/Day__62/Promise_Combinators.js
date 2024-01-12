//Other Promise Combinators

// ----> promise.race
//  Here the first settled promise will win the race

(async function () {
  const res = await Promise.race([
    getJson(`https://restcountries.com/v3.1/name/italy`),
    getJson(`https://restcountries.com/v3.1/name/Egypt`),
    getJson(`https://restcountries.com/v3.1/name/bhutan`),
  ]);
  console.log(res[0]);
})();

//Output :  {name: {…}, tld: Array(2), cca2: 'EG', ccn3: '818', cca3: 'EGY', …} ---> first to load will be outputted

// Useful for never ending promises, like for an example check given code below

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long`));
    }, sec * 1000);
  });
};
// we will not resolve here , use throw away variable (_)
Promise.race([
  getJson(`https://restcountries.com/v3.1/name/italy`),
  timeout(0.3),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//---->2.Promise.allSettled

//  return an array of settled Promises , including resolved and reject

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.resolve('Good its a sucess'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.resolve('Good its a sucess'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

//Output:(3) ['Success', 'Good its a sucess', 'Another Success'] ,if rejects throws an error

Promise.any([
  Promise.resolve('Success'),
  Promise.resolve('Good its a sucess'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

// Output: Success , output a fulfilled promise at first