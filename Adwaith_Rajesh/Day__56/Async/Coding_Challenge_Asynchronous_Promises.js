//---------Coding Challenge---- Asynchronous Javascript---------

*/

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

const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=187196627063561278194x72941`
  )
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(`Hey you are from ${data.city} , in ${data.country} right.?`);
      console.log(data);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => {
      return renderCountries(data[0]);
    })
    .catch(err => console.error(`${err.message}💥💥💥`));
};

// whereAmI(9.98875, 76.33316);
whereAmI(-33.933, 18.474);
whereAmI(19.037, 72.873);
whereAmI(52.508, 13.381);
