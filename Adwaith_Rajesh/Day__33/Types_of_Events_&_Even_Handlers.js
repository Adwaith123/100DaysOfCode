'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal'); // a nodelist {array of two elements,}

const openModal = function (e) {
  e.preventDefault(); // To prevent the behaviour of href elemnet in anchor tag
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Opening modal

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// Adding an event listner to all the html element in that array

//Closing modal

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //Selcting alll the dom
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Creating a Smooth scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  //modern way of smooth scrolling
  //section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

/*
// Behaves like a hover

// Modern way

h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener: Great! you are reading the heading :D');
}); // One Advantage :: allows multiple

//Old way

h1.onmouseenter = function (e) {
  alert('addEventListener: Great! you are reading the heading :D');
};

*/

const alertH1 = function (e) {
  alert('addEventListener: Great! you are reading the heading :D');

  //h1.removeEventListener('mouseenter', alertH1); // Removing an event lsitener
};

h1.addEventListener('mouseenter', alertH1);

//Another way to remove eventListener

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//Adding mouse click event to html document

/* <h1 onclick="alert('HTML alert')"></h1> */
