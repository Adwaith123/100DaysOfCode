//Returning values from async functions

//-------Try and catch Error handling------------

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountries = function (data, className = '') {
  const language = Object.values(data.languages).join(' '); // Converting objects into an array
  const currency = Object.values(data.currencies)[0].name;
  const html = ` <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 100000
      ).toFixed(1)} Million</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML(`beforeend`, html);
  countriesContainer.style.opacity = 1;
};
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
  });
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse geoCoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=	110551290285503e15664089x51457`
    );
    if (!resGeo.ok) throw new Error('Problem in getting location Area');
    const dataGeo = await resGeo.json();
    //Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem in getting Country');
    const data = await res.json();
    renderCountries(data[0]);

    //returning a promise explicitly
    return `You are in ${dataGeo.city} , ${dataGeo.country} right . ?`;
  } catch (err) {
    console.log(`${err}🙄 `);
    renderError(` 💣 ${err.message}`);

    //Manually --reject promise {By throwing an error}returned from async function
    //Note : rethrowing an error , bascally throwing the error , so it can propagate it down
    throw err;
  }
};

console.log('1: will get location');
/*
const city = whereAmI();
console.log(city);
*/
// Promise {<pending>} , Note : An async function always return a promise , and returned value will be the fulfilled value of the promise

// ---To overcome the above problem we do
//  -----One -Way ----
/*
whereAmI()
  .then(city => console.log(`2:${city}`))
  .catch(err => console.error(`2: ${err.message} 💥`))
  .finally(() => console.log('3: Finished getting location'));

  */
// Note : Clear explanation of above code
/*
    The reason we manually throw the error beacause , the returned proimise is always fullfilled inn this case , inorder to trigger a catch block we need a rejection , to create rejection we manually throwed an error
 */

// await can be only used inside an async function

//  -----Second-Way ----

// using iffy -- Immideatly invoked function

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2:${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log('3: Finished getting location');
})();

// skelton of async iffy
(async function () {
  try {
  } catch (err) {}
})();
