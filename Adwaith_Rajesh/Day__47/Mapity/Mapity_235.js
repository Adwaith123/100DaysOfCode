'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//////////////////---------Code Start Here------///////////////////

if (navigator.geolocation)
  // Usig two functionn(sucess,error)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // call back function
      const { latitude } = position.coords; // destructuring based on latitudes property of coords
      const { longitude } = position.coords;
      //   console.log(latitude, longitude);
      //   console.log(position);
      ////////////////////////////////////////////////////////////////

      const coords = [latitude, longitude];
      ///////////------------Leaft-let oveview COde-----------------
      const map = L.map('map').setView(coords, 12); // maps refers to an id named map

      //////////////////////////////////////////////////////////

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      ///////////////////////////////////////////////////////

      map.on('click', function (mapEvent) {
        console.log(mapEvent);
        form.classList.remove('hidden');
        inputDistance.focus(); // Cursor start blinking on km

        ////////////////////////////////////////////
        const { lat, lng } = mapEvent.latlng; // destructuring
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup', // Defing a class in css
            })
          )
          .setPopupContent('Workout')
          .openPopup(); // The reason we can chain these method because they return the object as i learend in class chaining
      }); //map is a special object
    },
    function () {
      alert('Could not get your position');
    }
  );

