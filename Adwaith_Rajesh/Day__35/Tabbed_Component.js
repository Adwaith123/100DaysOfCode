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

// Tabbed Component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');

/*
-----Bad Practice----Best to use event delegation
tabs.forEach(t =>
  t.addEventListener('click', () => {
    console.log('Tab');
  })
);
*/

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault(e);
  const clicked = e.target.closest('.operations__tab'); // find closeest parent with this tag name

  //Guard Clause
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //Activate content Area

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
