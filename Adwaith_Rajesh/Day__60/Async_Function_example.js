// ---- Consuming functions with Async Await

/*
const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  // console.log(res);
  const data = await res.json(); // Previously we have to return this as promise , now we can store it into variable
  console.log(data);
  renderCountries(data[0]);
};

whereAmI('portugal');
console.log('First');

*/
// Note : async function means it will run in the background while perfoming the code that is insdie the function , then it is done it automatically returns a promise

//await -> means bascilly wait for the result , until the promise is full filled

/*
// Adavntages of asyncronous function ---------
1.Now we can store a promise into a variabele */

// Note : Async await is simply a syntactic sugar over the then method in promises

//----Re-writing the WhereAmi function------------------

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
  });
};

const whereAmI = async function () {
  const pos = await getPosition();
  console.log(pos);
  const { latitude: lat, longitude: lng } = pos.coords;

  //Reverse geoCoding
  const resGeo = await fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=187196627063561278194x72941`
  );
  const dataGeo = await resGeo.json();
  console.log(dataGeo);
  //Country data

  const res = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo.country}`
  );
  const data = await res.json();
  renderCountries(data[0]);
};

whereAmI();
console.log('First');
