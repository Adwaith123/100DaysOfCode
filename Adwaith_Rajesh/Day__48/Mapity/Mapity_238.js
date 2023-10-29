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

////////////////////------------Defining Classes---///////////////

class Workout {
  date = new Date(); // modern classfields
  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords; // [lat,lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
}

//----Child Classes

class Running extends Workout {
  constructor(coords, distanace, duration, cadence) {
    super(coords, distanace, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  calcPace() {
    //min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distanace, duration, elevationGain) {
    super(coords, distanace, duration);
    this.elevationGain = elevationGain;
    this.speed = this.calcSpeed();
  }

  calcSpeed() {
    //min/km
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const run1 = new Running([39, -12], 5.2, 24, 175);
const cycling1 = new Cycling([39, -12], 27, 95, 523);

console.log(run1, cycling1);

/////////////////////------------Application Archetecture---------------//////////////////////
class App {
  #map;
  #mapEvent;
  constructor() {
    this._getPosition(); // this keyword refers to current object

    //-----Event Listners-------------

    form.addEventListener('submit', this._newWorkout.bind(this)); // Here this keyword refers to form elemnt it attached to

    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation)
      // get current function call the callback function loadMap
      // and here this._loadMap is considered as regular function call
      // and the this keyword inside loadmap points to undefined
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this), //------>Important
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];
    ///////////------------Leaft-let oveview COde-----------------
    this.#map = L.map('map').setView(coords, 12);

    //////////////////////////////////////////////////////////

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //Handling click on map
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE; // Coppying it to a global Varibale
    form.classList.remove('hidden');
    inputDistance.focus(); // Cursor start blinking on km
  }

  _toggleElevationField(e) {
    e.preventDefault();
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault(); // To prevent the default behaviour of forms

    //Clear input Fields

    inputDistance.value = inputDuration.value = inputCadence.value = '';
    ////////////////////Display Marker///////////////////////
    const { lat, lng } = this.#mapEvent.latlng; // destructuring
    L.marker([lat, lng])
      .addTo(this.#map)
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
  }
}

const app = new App();
console.log(app);
