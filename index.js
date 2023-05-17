const editButton = document.querySelector('.profile-header__edit-button');
const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup__edit');
const closePopupButtons = document.querySelectorAll('.popup__button-close');
const formElementEdit = document.querySelector('.popup__container_edit');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_info');
const saveButton = document.querySelector('.popup__button-save');
const addButton = document.querySelector('.profile-header__add-button');
const popupAdd = document.querySelector('.popup__add');
const submits = document.querySelectorAll("button[type=submit]");

function popupEditOpen() {
    console.log('I ve been clicked');
    popupEdit.classList.add('popup_opened');
};

function popupAddOpen() {
    console.log('I ve been clicked');
    popupAdd.classList.add('popup_opened');
};

// function popupClose() {
//     console.log('I ve been closed');
//     popup.classList.remove('popup_opened');
// };

closePopupButtons.forEach(closePopupButton => closePopupButton.addEventListener('click', function() {
    console.log('I ve been closed');
    popups.forEach(function(popup) {
        popup.classList.remove('popup_opened');
    });
}));

editButton.addEventListener('click', popupEditOpen);
addButton.addEventListener('click', popupAddOpen);
// closePopupButton.addEventListener('click', popupClose);

function handleFormSubmitEdit(evt) {
    evt.preventDefault();
  
    const userName = document.querySelector('.profile-header__user-name');
    const userInfo = document.querySelector('.profile-header__user-description');
    
    userName.textContent = nameInput.value;
    userInfo.textContent = jobInput.value;

    console.log('I ve been saved');
}

submits.forEach(submit => submit.addEventListener('click', function() {
    console.log('I ve been saved and closed');
    popups.forEach(function(popup) {
        popup.classList.remove('popup_opened');
    });
}));

formElementEdit.addEventListener('submit', handleFormSubmitEdit); 
// saveButton.addEventListener('click', popupClose);

const likeButtons = document.querySelectorAll('.gellary__like-button');

likeButtons.forEach(likeButton => likeButton.addEventListener('click', function() {
    console.log('I ve been liked');
    likeButton.classList.toggle('gellary__like-button_active');
}));

const placeInput = document.querySelector('.popup__input_place');
const linkInput = document.querySelector('.popup__input_link');
const formElementAdd = document.querySelector('.popup__container_add')

function handleFormSubmitAdd() {
    evt.preventDefault();
  
    const galleryItems = document.querySelector('.gallery');

    const galleryItem = document.createElement('.gallery__item');

    galleryItems.append(galleryItem);

    const galleryCaption = document.querySelector('.gallery__caption');
    const galleryPhoto = document.querySelector('.gallery__photo');
    
    galleryCaption.textContent = placeInput;
    galleryPhoto.textContent = linkInput;

    console.log('I ve been added');
}

formElementAdd.addEventListener('submit', handleFormSubmitAdd); 

