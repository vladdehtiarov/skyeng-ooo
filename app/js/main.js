'use strict';

const burgerBtn = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.close-menu');

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('show-menu');
});


const goPopup = document.querySelector('.popup-link');
const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup-close');

goPopup.addEventListener('click', (event) => {
    event.preventDefault();
    popup.classList.remove('popup-hide');
});

popupClose.addEventListener('click', () => {
    popup.classList.add('popup-hide');
});
