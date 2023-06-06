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
const placeInput = addForm.querySelector('.popup__input_value_place');
const linkInput = addForm.querySelector('.popup__input_value_link');
const linkAvatarInput = document.querySelector('.popup__input_value_link-avatar');
const photoLink = popupSeePhoto.querySelector('.popup__photo');
const photoName = popupSeePhoto.querySelector('.popup__photo-caption');
const userName = document.querySelector('.profile-header__user-name');
const userDescription = document.querySelector('.profile-header__user-description');
const userPhoto = document.querySelector('.profile-header__user-avatar');
const popups = document.querySelectorAll('.popup');
const submitButton = document.querySelector('.popup__button-save');

function handleFormSubmit(elem, onSubmit) {
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

function renderLoading(isLoading) {
  if (isLoading) {
    submitButton.textContent = "Сохранение...";
  } else {
    submitButton.textContent = "ёж";
  }
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

editAvatarButton.addEventListener('click', () => {
  openPopup(popupAvatarEdit);
  linkAvatarInput.value = userPhoto.src;
  hideError(linkAvatarInput, validitySettings);
});

handleFormSubmit(popupEdit, () => {
  setUserInfo(nameInput.value, jobInput.value)
    .then(res => {
      userName.textContent = res.name;
      userDescription.textContent = res.about;

      console.log("I've been saved and edited");
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
    })
});

handleFormSubmit(popupAdd, () => {
  renderLoading(true);

  setCards(placeInput.value, linkInput.value)
    .then(res => {
      const newGalleryElement = addGalleryElement(res.name, res.link);
      galleryContainer.prepend(newGalleryElement);

      console.log("I've been saved and added");
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
    })
});

handleFormSubmit(popupAvatarEdit, () => {
  setUserAvatar(linkAvatarInput.value)
    .then(res => {
      userPhoto.src = res.avatar;
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
    })
});

popups.forEach(popup => handleClosePopup(popup));
popups.forEach(popup => handleCloseByBackground(popup));

const validitySettings = {
  formSelector: '.form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__button-save',
  inputErrorClass: 'popup__input_invalid'
}

enableValidation(validitySettings);

getUserInfo()
  .then(res => {
    userName.textContent = res.name;
    userDescription.textContent = res.about;
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false);
  })

getUserAvatar()
  .then(res => {
    userPhoto.src = res.avatar;
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false);
  })

import './styles/index.css';
import { addGalleryElement, galleryContainer } from './components/card';
import { handleClosePopup, openPopup, closePopup, handleCloseByBackground } from './components/modal';
import { enableValidation, hideError, disableButton } from './components/validation';
import { getUserInfo, setUserInfo, setCards, getUserAvatar, setUserAvatar } from './components/api';