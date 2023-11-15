///Lecture -----------450----------------

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

const callAdjacentNeighbours = function (country) {
  const request2 = new XMLHttpRequest();
  request2.open('GET', `https://restcountries.com/v3.1/alpha/${country}`);
  request2.send();
  request2.addEventListener('load', function () {
    const [data2] = JSON.parse(this.responseText);
    renderCountries(data2, 'neighbour');
  });
};

const getCountryAndNeighbour = function (country) {
  //AJAX Call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render country 1
    renderCountries(data);

    //Get Neighbour Countries
    const neighbours = data.borders;
    console.log(neighbours);
    neighbours.forEach(element => {
      callAdjacentNeighbours(element);
    });
  });
};
// https://restcountries.com/v3.1/name/india

getCountryAndNeighbour('sri lanka');
// getCountryAndNeighbour('Chinese ');

// Showing callback hell {appearnce of triangular shape}
setTimeout(() => {
  console.log('1 second passed ');
  setTimeout(() => {
    console.log('2 second passed ');
    setTimeout(() => {
      console.log('3 second passed ');
    }, 1000);
  }, 1000);
}, 1000);
