'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal'); // a nodelist {array of two elements,}

const openModal = function (e) {
  e.preventDefault();// To prevent the behaviour of href elemnet in anchor tag
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Opening modal

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); // Adding an event listner to all the html element in that array

//Closing modal

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //Selcting alll the dom
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
