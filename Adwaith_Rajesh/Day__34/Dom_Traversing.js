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

//////////////////////////////////////////////////
//Opening modal

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// Adding an event listner to all the html element in that array

//////////////////////////////////////////////////
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

const h1 = document.querySelector('h1');

// Going Downwards : (child elements)

// ---Note {querySelector works also with the elemenst as well}

console.log(h1.querySelectorAll('.highlight')); //NodeList(2) [span.highlight, span.highlight]

console.log(h1.childNodes); //NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]

console.log(h1.children); //HTMLCollection(3) [span.highlight, br, span.highlight] {works only for direct children}

/*
 Old way 
{
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'white';

*/
// Going Upwards (Parent elements)

console.log(h1.parentNode); //<div class="header__title">…</div>
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways : sibling

console.log(h1.previousElementSibling); // because h1 is the first child and there is no sibling
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
 