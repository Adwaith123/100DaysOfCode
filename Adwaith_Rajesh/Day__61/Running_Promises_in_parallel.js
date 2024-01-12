//Lecture - 266 --Running Promises in parallel

const getJson = function (url, errorMsg = `Item not Found`) {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`${errorMsg}--> (${response.status}) `);
    }
    return response.json();
  });
};

// Running Async in sequence


const get3Countries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJson(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJson(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJson(`https://restcountries.com/v3.1/name/${c3}`);

    console.log([data1.capital, data2.capital, data3.capital]);
  } catch (err) {
    console.error(err);
  }
};

get3Countries('germany', 'canada', 'bharat');
// get3Countries('canada');
// get3Countries('russia');


//Running async in parallel (Mainly improves loading time)

const get4Countries = async function (c1, c2, c3) {
  try {
    // all is helper function running on the promise constructor , it is a static method
    const data = await Promise.all([
      getJson(`https://restcountries.com/v3.1/name/${c1}`),
      getJson(`https://restcountries.com/v3.1/name/${c2}`),
      getJson(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get4Countries('germany', 'canada', 'bharat', 'japan');

// Note: if one promise rejects all the promises will be rejected
// --> Here while doing parallel promises they shouldnt depend on one another

// We can use  parallel promises  with .then() also
