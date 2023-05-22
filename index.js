const editButton = document.querySelector('.profile-header__edit-button');
const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup__type_edit');
// const closeButton = document.querySelector('.popup__button-close');
const closeButtons = document.querySelectorAll('.popup__button-close');
const formElementEdit = document.querySelector('.popup__container_type_edit');
const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_info');
const addButton = document.querySelector('.profile-header__add-button');
const popupAdd = document.querySelector('.popup__type_add');
const popupImageOpen = document.querySelector('.popup__type_open-photo');
const popupOpenPhoto = document.querySelector('.popup__type_open-photo');
const submits = document.querySelectorAll("button[type=submit]");
const addForm = document.querySelector('.popup__container_type_add');
const placeInput = addForm.querySelector('.popup__input_value_place');
const linkInput = addForm.querySelector('.popup__input_value_link');
const galleryContainer = document.querySelector('.gallery');
const initialCards = [
    {
      name: 'Пушкин',
      link: 'https://nastyanpictures1.s3.eu-north-1.amazonaws.com/Pushkin.jpg'
    },
    {
      name: 'Рускеала',
      link: 'https://nastyanpictures1.s3.eu-north-1.amazonaws.com/Ruskeala.jpg'
    },
    {
      name: 'Санкт-Петербург',
      link: 'https://nastyanpictures1.s3.eu-north-1.amazonaws.com/Saint-P.jpg'
    },
    {
      name: 'Тургояк',
      link: 'https://nastyanpictures1.s3.eu-north-1.amazonaws.com/Tyrgoyak.jpg'
    },
    {
      name: 'Ульяновск',
      link: 'https://nastyanpictures1.s3.eu-north-1.amazonaws.com/Ulyanovsk.jpg'
    },
    {
      name: 'Псков',
      link: 'https://nastyanpictures1.s3.eu-north-1.amazonaws.com/Pskov.jpg'
    }
  ];

const galleryTemplate = document.getElementById('gallery__template').content.querySelector('.gallery__item');

function handlePopupOpen(popup) {
  popup.classList.add('popup_opened');

  console.log('I ve been clicked');
}

function handlePopupClose(popup) {
  const closeButton = popup.querySelector('.popup__button-close');

  closeButton.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
  
    console.log('I ve been closed');
  });
}

function handleFormSubmit(popup, onSubmit)  {
  const form = popup.querySelector('.popup__container');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
  
    onSubmit();

    popup.classList.remove('popup_opened');   
  }); 
}

// function handleFormSubmitAdd(evt) {
//   evt.preventDefault();
//   const newGalleryElement = addGalleryElement(placeInput.value, linkInput.value)
//   galleryContainer.prepend(newGalleryElement);
//   addForm.reset();

//   console.log('I ve been added');
// }

// function handleFormSubmitEdit(evt, popup) {
//     evt.preventDefault();
  
//     document.querySelector('.profile-header__user-name').textContent = nameInput.value;
//     document.querySelector('.profile-header__user-description').textContent = jobInput.value;

//     handlePopupClose(popup);

//     console.log('I ve been saved');
// }

function handleDeleteElement(element) {
    element.remove();

    console.log('I ve been deleted');
}

function handleLikeElement(element) {
    element.querySelector('.gellary__like-button').classList.toggle('gellary__like-button_active');

    console.log('I ve been liked');
}

function handlePopupImageOpen(name, link) {
  handlePopupOpen(popupImageOpen);

  popupOpenPhoto.querySelector('.popup__photo').src = link;
  popupOpenPhoto.querySelector('.popup__photo-caption').textContent = name;
  popupOpenPhoto.querySelector('.popup__photo').alt = name;

  console.log('I ve been wide-opened');
}

function addGalleryElement(name, link) {
    const galleryElement = galleryTemplate.cloneNode(true);

    galleryElement.querySelector('.gallery__caption').textContent = name;
    galleryElement.querySelector('.gallery__photo').src = link;
    galleryElement.querySelector('.gallery__photo').alt = name;

    const deleteButton = galleryElement.querySelector('.gallery__delete-button');
    const likeButton = galleryElement.querySelector('.gellary__like-button');
    const openWideButton = galleryElement.querySelector('.gallery__photo-button');

    deleteButton.addEventListener('click', () => handleDeleteElement(galleryElement));
    likeButton.addEventListener('click', () => handleLikeElement(galleryElement));
    openWideButton.addEventListener('click', () => handlePopupImageOpen(name, link));

    return galleryElement;
}

initialCards.forEach(function (element) {
    const newGalleryElement = addGalleryElement(element.name, element.link);
    galleryContainer.append(newGalleryElement);
});

editButton.addEventListener('click', () => handlePopupOpen(popupEdit));
addButton.addEventListener('click', () => handlePopupOpen(popupAdd));
// formElementEdit.addEventListener('submit', () => handleFormSubmitEdit); 
// addForm.addEventListener('submit', handleFormSubmitAdd);

handleFormSubmit(popupEdit, () => {
  document.querySelector('.profile-header__user-name').textContent = nameInput.value;
  document.querySelector('.profile-header__user-description').textContent = jobInput.value;

  console.log('I ve been saved');
});

handleFormSubmit(popupAdd, () => {
  const newGalleryElement = addGalleryElement(placeInput.value, linkInput.value)
  galleryContainer.prepend(newGalleryElement);
  addForm.reset();

  console.log('I ve been added');
});

handlePopupClose(popupEdit);
handlePopupClose(popupAdd);
handlePopupClose(popupImageOpen);

// popups.forEach(function (popup) {
//   const closeButton = popup.querySelector('.popup__button-close');
  
//   closeButton.addEventListener('click', () => {
//     popup.classList.remove('popup_opened');
  
//     console.log('I ve been closed');
//   });
// });

