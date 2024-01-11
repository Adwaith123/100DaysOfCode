// Lecture -161 - promisifying the geoloacation api

// This is an example of callback


navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.log(err)
);

console.log('Gettig Position');

// Promisifying the above code



const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
  });
};

getPosition().then(res => console.log(res));
console.log('Gettig Position');

// -----Simplifying the above promise ------------



const getPos = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPos().then(res => console.log(res));
console.log('Gettig Position');

// Note : Here resolve  itself becomes the callback and everything becomes automatically

// Coding Challenge Code
const whereAmI = function () {
  getPos()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=187196627063561278194x72941`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      alert(`Hey you are from ${data.city} , in ${data.country} right.?`);
      console.log(data);
      // console.log(data.intersection.street2);

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

btn.addEventListener('click', whereAmI);