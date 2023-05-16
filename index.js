const editButton = document.querySelector('.profile-header__edit-button');
const popupEdit = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__button-close');

function popupOpen() {
    console.log('I ve been clicked');
    popupEdit.classList.add('popup_opened');
};

function popupClose() {
    console.log('I ve been closed');
    popupEdit.classList.remove('popup_opened');
};


editButton.addEventListener('click', popupOpen);
closePopupButton.addEventListener('click', popupClose);