'use strict';

//Selection of elements

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal'); // a nodelist {array of two elements,}
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

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

//////////////////////////////////////////////////
// Button scrolling

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

/////////////////////////////////
//Page Navigation

// return a NodeList
/*
----------------querySelectorAll return a nodeList -------

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();

    const id = this.getAttribute('href'); // to get relative section
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
*/
// Event Delegation

// 1. Add event listener to a common parent
// 2. Determine what element orginated the event

/*

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target); //<a class=​"nav__link" href=​"#section--1">​Features​</a>​
});

*/

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //Matching Stratergy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); // to get relative section
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});
