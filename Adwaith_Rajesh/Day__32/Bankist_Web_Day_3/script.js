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

//Selecting Elements

console.log(document.documentElement); // selecting the element node
console.log(document.head);
console.log(document.body);

const allSections = document.querySelector('.section');
const header = document.querySelector('.header');

console.log(allSections);
//<section class="section" id="section--1">…</section>

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');

console.log(allButtons);
//HTMLCollection(9) [button.btn--text.btn--scroll-to, button.btn.operations__tab.operations__tab--1.operations__tab--active, button.btn.operations__tab.operations__tab--2, button.btn.operations__tab.operations__tab--3, button.slider__btn.slider__btn--left, button.slider__btn.slider__btn--right, button.btn.btn--show-modal, button.btn--close-modal, button.btn]

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements

// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies to improve analytics.';
message.innerHTML =
  'We use cookies to improve analytics.  <button class ="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);

//----header.append(message.cloneNode(true));----- // we wil see the cookie message as first and last child

//header.before(message); // add cookie elemnt as a sibling
// header.after(message);

// Delete elemenst

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // new way
    //message.parentElement.removeChild(message);// old way
  });
