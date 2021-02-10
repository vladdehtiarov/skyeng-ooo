'use strict';

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
