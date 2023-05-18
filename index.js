const editButton = document.querySelector('.profile-header__edit-button');
const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup__edit');
const closePopupButtons = document.querySelectorAll('.popup__button-close');
const formElementEdit = document.querySelector('.popup__container_edit');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_info');
// const saveButton = document.querySelector('.popup__button-save');
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

const createButton = document.querySelector('.popup__button-create');
const placeInput = document.querySelector('.popup__input_place');
const linkInput = document.querySelector('.popup__input_link');


function handleFormSubmitAdd(evt) {
    evt.preventDefault();

    const galleryItemTemplate = document.querySelector('#gallery__item').content;
    const gallery = document.querySelector('.gallery');

    const galleryElement = galleryItemTemplate.querySelector('.gallery__item').cloneNode(true);

    gallery.append(galleryElement); 

    const galleryCaption = document.querySelector('.gallery__caption');
    const galleryPhoto = document.querySelector('.gallery__photo');
    
    galleryCaption.textContent = placeInput.value;
    galleryPhoto.src = linkInput.value;
    galleryPhoto.alt = placeInput.value;

    console.log('I ve been created');
}

createButton.addEventListener('click', handleFormSubmitAdd);

const deleteButtons = document.querySelectorAll('.gallery__delete-button');

deleteButtons.forEach(deleteButton => deleteButton.addEventListener('click', function() {
    console.log('I ve been deleted');
    const galleryItem = document.querySelector('.gallery__item');
    galleryItem.remove();
}));

const galleryPhotoButtons = document.querySelectorAll('.gallery__photo-button');
const popupsOpenPhoto = document.querySelectorAll('.popup__open-photo');

galleryPhotoButtons.forEach(galleryPhotoButton => galleryPhotoButton.addEventListener('click', function() {
    console.log('I ve been wide-opened');    
    popupsOpenPhoto.forEach(function(popupOpenPhoto) {
        popupOpenPhoto.classList.add('popup_opened');
    });

    const galleryCaption = document.querySelector('.gallery__caption');
    const popupPhotoCaption = document.querySelector('.popup__photo-caption');
    const galleryPhoto = document.querySelector('.gallery__photo');
    const popupPhoto = document.querySelector('.popup__photo');
    
    popupPhotoCaption.textContent = galleryCaption.textContent;
    popupPhoto.src = galleryPhoto.src;
    popupPhoto.alt = galleryCaption.textContent;
}));





