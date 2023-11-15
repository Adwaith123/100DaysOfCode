// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
// console.log(request);

//---Lecture 452-----------

//---Consuming promises

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json(); // response.json will return as new promise
    })
    .then(function (data) {
      console.log(data);
    });
};

getCountryData('portugal');



// Elaboartive example 

//---Lecture 252-----------

//---Consuming promises

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

const getCountryData = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      return response.json(); // response.json will return as new promise
    })
    .then(data => {
      renderCountries(data[0]);
    });
};

getCountryData('Bharat');