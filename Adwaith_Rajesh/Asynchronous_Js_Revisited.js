'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////////////////////////

//old way

/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // console.log(data.latlng[0]);

    const html = `<article class="country">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} Million</p>
      <p class="country__row"><span>🗣️</span>${
        Object.entries(data.languages)[0][1]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.entries(Object.entries(data.currencies)[0][1])[0][1]
      }</p>
    </div>
  </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('germany');
getCountryData('usa');
getCountryData('japan');

*/

/////////Callback Hell//////////////////

/*

const renderCountry = function (data, className = '') {
  const html = `<article class="${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} Million</p>
      <p class="country__row"><span>🗣️</span>${
        Object.entries(data.languages)[0][1]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.entries(Object.entries(data.currencies)[0][1])[0][1]
      }</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryandNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    ////Render Country
    renderCountry(data);

    /////////Get Neighbour Country
    const neighbour = data.borders?.[0];
    console.log(neighbour);

    if (!neighbour) return;

    //// Ajax call country 2

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);

      renderCountry(data, 'neighbour');
    });
  });
};

getCountryandNeighbour('usa');

// Questionn :: what if we have to get the neighbour of neighbouring country .. nesting long query is not possible this condition is called callback hell



// =====================Promises==================

//Old way

// const request2 = new XMLHttpRequest();
// request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// request2.send();

// request2.addEventListener('load', function () {
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);
// });

// New way
/*

const request = fetch('https://restcountries.com/v3.1/name/india');
console.log(request);

*/
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = ` <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 100000
      ).toFixed(1)} Million</p>
      <p class="country__row"><span>🗣️</span>${
        Object.entries(data.languages)[0][1]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.entries(Object.entries(data.currencies)[0][1])[0][1]
      }</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML(`beforeend`, html);
  // countriesContainer.style.opacity = 1;
};
// consuming a Promise
/*

const getCountryData = function (country) {
   fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response); // Here response is an object
      return response.json(); // json() fun is laso a asyncronous funtion which also returns new promise
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    }); 
};

getCountryData('portugal');

*/
// Note :first then() method is used to handle the first promise and to read the data from the response we called a json() method , then this method return another promise , to solve that we used another then() method

/////// Promise simplified version////////////

/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};

getCountryData('portugal');

*/

///Chaining promises--Flat chain of promises/////////////

/*

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      // //Country2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'));
};

getCountryData('bharat');

*/

///Handling Rejected promises//////////////////

/*

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      response => response.json()
      // err => alert(err)
    )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      // //Country2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(
      response => response.json()
      // err => alert(err)
    )
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err} : 💥💥💥💥`);
      renderError(`Something went wrong ${err}. Try Again !!!`);
    })
    .finally(() => {
      //Example : to hide a loader
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('bharat');
});

getCountryData('china');

*/
// NOte.....
/*
------------------>.then(
  response => response.json(), 
  err => alert(err)
)
 ---------------------->here in then() method the 2nd callback is called , when the promise is rejected
*/

// Note: errors propagate down to the bottom until an error method is defined

//------------------------> Finally is a method thats always run even if the promise is rejected or fulfiilled.Here the  finally Method works because the .catch() method returns a promise

///Handling Rejected promises Manually //////////////////
/*
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      response => {
        console.log(response);

        if (!response.ok)
          // <-------------------------------------->
          throw new Error(`Country Not Found (${response.status})`);
        return response.json(); // -----Beacuse we added a block we have to return explicitly
        //< --------------------------------------->
      }
      // err => alert(err)
    )
    .then(data => {
      renderCountry(data[0]);
      // const neighbour = data[0].borders?.[0];
      const neighbour = 'jbhzxhb';
      // //Country2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(
      response => {
        if (!response.ok)
          // <-------------------------------------->
          throw new Error(`Neighbour Not Found (${response.status})`);
        return response.json();
      }
      // err => alert(err)
    )
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err} : 💥💥💥💥`);
      renderError(`Something went wrong ${err}. Try Again !!!`);
    })
    .finally(() => {
      //Example : to hide a loader
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('bharat');
});

*/
// Note : whenever the promise sees a Error it will immediatetly rejects and the catch() method employed to recives the rejected promise will trigger itself

// -------------------------Avoiding repititive Code-----------------

const getJson = function (url, errorMsg = `Ooops`) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};
const getCountryData = function (country) {
  // Country 1
  getJson(`https://restcountries.com/v3.1/name/${country}`, `Country Not Found`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      // const neighbour = 'jbhzxhb';
      // //Country2
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Neighbour Not Found`
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err} : 💥💥💥💥`);
      renderError(`Something went wrong ${err}. Try Again !!!`);
    })
    .finally(() => {
      //Example : to hide a loader
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('bharat');
});
