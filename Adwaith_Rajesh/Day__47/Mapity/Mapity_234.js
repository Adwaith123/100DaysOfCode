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
      const { latitude } = position.coords; // destructuring based on latitudes property of coords
      const { longitude } = position.coords;
      //   console.log(latitude, longitude);
      //   console.log(position);

      const coords = [latitude, longitude];
      ///////////------------Leaft-let oveview COde-----------------
      const map = L.map('map').setView(coords, 12); // maps refers to an id named map

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
    },
    function () {
      alert('Could not get your position');
    }
  );
