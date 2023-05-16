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

const formElement = document.querySelector('.popup__container');

const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_info');

const saveButton = document.querySelector('.popup__button-save');

function handleFormSubmit(evt) {
    evt.preventDefault();
  
    const userName = document.querySelector('.profile-header__user-name');
    const userInfo = document.querySelector('.profile-header__user-description');
    
    userName.textContent = nameInput.value;
    userInfo.textContent = jobInput.value;

    console.log('I ve been saved');
}

formElement.addEventListener('submit', handleFormSubmit); 
saveButton.addEventListener('click', popupClose);
