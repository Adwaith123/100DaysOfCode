// 255. Throwing errors manually

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
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
  // countriesContainer.style.opacity = 1;
};

//This function return a promise {a helper function}
const getJson = function (url, errorMsg = `Item not Found`) {
  return fetch(url).then(response => {
    console.log(response);
    //--------------Defining errors manually------------------
    if (!response.ok) {
      throw new Error(`${errorMsg}--> (${response.status}) `);
    }
    return response.json(); // Here if we are making a block , then we have to return explicitly
  });
};
const getCountryData = country => {
  //country 1
  getJson(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      renderCountries(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('No Neighbour Found !!');

      //Country 2 // return forcibly
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then(data => renderCountries(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err} 💥💥💥💥`);
      renderError(`Something Went wrong 💥💥💥💥 ${err.message}.Try Again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('shdhsg');
});

getCountryData('australia');

//--Manually thrwoing error simple logic

// if (!response.ok) {
//   throw new Error(`Country not found --> (${response.status}) `);
// }
