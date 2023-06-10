import './styles/index.css';
import { addGalleryElement, galleryContainer } from './components/card';
import { handleClosePopup, openPopup, closePopup, handleCloseByBackground } from './components/modal';
import { enableValidation, hideError, disableButton } from './components/validation';
import { getUserInfo, setUserInfo, setCards, setUserAvatar, getCards } from './components/api';

const popupEdit = document.querySelector('.popup__type_edit');
const popupAdd = document.querySelector('.popup__type_add');
const popupAvatarEdit = document.querySelector('.popup__type_edit-avatar');
const popupSeePhoto = document.querySelector('.popup__type_open-photo');
const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_info');
const editButton = document.querySelector('.profile-header__edit-button');
const addButton = document.querySelector('.profile-header__add-button');
const editAvatarButton = document.querySelector('.profile-header__avatar-button');
const addForm = document.querySelector('.popup__container_type_add');
const editAvatarForm = document.querySelector('.popup__container_type_edit-avatar');
const placeInput = addForm.querySelector('.popup__input_value_place');
const linkInput = addForm.querySelector('.popup__input_value_link');
const linkAvatarInput = document.querySelector('.popup__input_value_link-avatar');
const photoLink = popupSeePhoto.querySelector('.popup__photo');
const photoName = popupSeePhoto.querySelector('.popup__photo-caption');
const userName = document.querySelector('.profile-header__user-name');
const userDescription = document.querySelector('.profile-header__user-description');
const userPhoto = document.querySelector('.profile-header__user-avatar');
const popups = document.querySelectorAll('.popup');
let userId;

export function openPhotoPopup(name, link) {
  openPopup(popupSeePhoto);

  photoLink.src = link;
  photoName.textContent = name;
  photoLink.alt = name;

  console.log("I've been wide-opened");
}

function handleFormSubmit(popup, onSubmit) {
  const form = popup.querySelector('.popup__container');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    onSubmit(evt);
  });
}

editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  nameInput.value = userName.textContent;
  jobInput.value = userDescription.textContent;
  hideError(nameInput, validitySettings);
  hideError(jobInput, validitySettings);
})

addButton.addEventListener('click', () => {
  openPopup(popupAdd);
  addForm.reset();
  hideError(placeInput, validitySettings);
  hideError(linkInput, validitySettings);
})

editAvatarButton.addEventListener('click', () => {
  openPopup(popupAvatarEdit);
  editAvatarForm.reset();
  hideError(linkAvatarInput, validitySettings);
})

handleFormSubmit(popupEdit, (event) => {
  event.submitter.textContent = 'Сохранение...';

  setUserInfo(nameInput.value, jobInput.value)
    .then(res => {
      userName.textContent = res.name;
      userDescription.textContent = res.about;

      closePopup(popupEdit);
      disableButton(event.submitter);

      console.log("I've been saved and edited");
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      event.submitter.textContent = 'Сохранить';
    })
})

handleFormSubmit(popupAdd, (event) => {
  event.submitter.textContent = 'Сохранение...';

  setCards(placeInput.value, linkInput.value)
    .then(res => {
      const newGalleryElement = addGalleryElement(res.likes, res.name, res.link, res._id, res.owner._id, userId);
      galleryContainer.append(newGalleryElement);

      closePopup(popupAdd);
      disableButton(event.submitter);

      console.log("I've been saved and added");
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      event.submitter.textContent = 'Создать';
    })
})

handleFormSubmit(popupAvatarEdit, (event) => {
  event.submitter.textContent = 'Сохранение...';

  setUserAvatar(linkAvatarInput.value)
    .then(res => {
      userPhoto.src = res.avatar;

      closePopup(popupAvatarEdit);
      disableButton(event.submitter);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      event.submitter.textContent = 'Сохранить';
    })
})

popups.forEach(popup => handleClosePopup(popup));
popups.forEach(popup => handleCloseByBackground(popup));

const validitySettings = {
  formSelector: '.form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__button-save',
  inputErrorClass: 'popup__input_invalid'
}

enableValidation(validitySettings);

Promise.all([getCards(), getUserInfo()])
  .then(([allCards, userData]) => { 
    userName.textContent = userData.name,
    userDescription.textContent = userData.about,
    userPhoto.src = userData.avatar,
    userId = userData._id,

    allCards.forEach(function (element) {
      const newGalleryElement = addGalleryElement(element.likes, element.name, element.link, element._id, element.owner._id, userId);
      galleryContainer.append(newGalleryElement);
    })
  })
