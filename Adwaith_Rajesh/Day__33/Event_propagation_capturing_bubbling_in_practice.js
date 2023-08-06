// Event propagation capturing and bubbling

// --Event propagation capturing and bubbling in practice

// rgb(255,255,255)

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1));
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor()); //rgb(84,222,129)

document.querySelector('.nav__link').addEventListener('click', function (e) {
  // this points to the elemnt which the event handler is attached
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget); // where the click happened

  // stoping the propagation {Bubbling}
  //e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget); // where the click happened and // this ==  currentTarget
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget); // where the click happened
  },
  true // trying to listening to the capturing phase  by adding third parameter {BY default it is said to be false}
);

// OUTPUT

/*
LINK 
<a class=​"nav__link" href=​"#" style=​"background-color:​ rgb(114, 56, 69)​;​">​Features​</a>​

 CONTAINER 
 <a class=​"nav__link" href=​"#" style=​"background-color:​ rgb(114, 56, 69)​;​">​Features​</a>​

 NAV 
 <a class=​"nav__link" href=​"#" style=​"background-color:​ rgb(114, 56, 69)​;​">​Features​</a>​
*/