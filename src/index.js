const popupEdit = document.querySelector('.popup__type_edit');
const popupAdd = document.querySelector('.popup__type_add');
const popupSeePhoto = document.querySelector('.popup__type_open-photo');
const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_info');
const editButton = document.querySelector('.profile-header__edit-button');
const addButton = document.querySelector('.profile-header__add-button');
const addForm = document.querySelector('.popup__container_type_add');
const placeInput = addForm.querySelector('.popup__input_value_place');
const linkInput = addForm.querySelector('.popup__input_value_link');
const photoLink = popupSeePhoto.querySelector('.popup__photo');
const photoName = popupSeePhoto.querySelector('.popup__photo-caption');
const userName = document.querySelector('.profile-header__user-name');
const userDescription = document.querySelector('.profile-header__user-description');
const popups = document.querySelectorAll('.popup');

function handleFormSubmit(elem, onSubmit)  {
  const form = elem.querySelector('.popup__container');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
  
    onSubmit();
 
    closePopup(elem);
    disableButton(evt.submitter);
  }); 
}

export function openPhotoPopup(name, link) {
  openPopup(popupSeePhoto);

  photoLink.src = link;
  photoName.textContent = name;
  photoLink.alt = name;

  console.log("I've been wide-opened");
}

editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  nameInput.value = userName.textContent;
  jobInput.value = userDescription.textContent;
  hideError(nameInput, validitySettings);
  hideError(jobInput, validitySettings);
});

addButton.addEventListener('click', () => {
  openPopup(popupAdd);
  addForm.reset();
  hideError(placeInput, validitySettings);
  hideError(linkInput, validitySettings);
});

handleFormSubmit(popupEdit, () => {
  userName.textContent = nameInput.value;
  userDescription.textContent = jobInput.value;

  console.log("I've been saved and edited");
});

handleFormSubmit(popupAdd, () => {
  const newGalleryElement = addGalleryElement(placeInput.value, linkInput.value)
  galleryContainer.prepend(newGalleryElement);

  console.log("I've been saved and added");
});

popups.forEach(popup => handleClosePopup(popup));
popups.forEach(popup => handleCloseByBackground(popup));

const validitySettings = {
  formSelector: '.form',
  inputSelector:'.popup__input',
  buttonSelector: '.popup__button-save',
  inputErrorClass: 'popup__input_invalid'
}

enableValidation(validitySettings);

import './styles/index.css';
import { addGalleryElement, galleryContainer } from './components/card';
import { handleClosePopup, openPopup, closePopup, handleCloseByBackground } from './components/modal';
import { enableValidation, hideError, disableButton } from './components/validation';