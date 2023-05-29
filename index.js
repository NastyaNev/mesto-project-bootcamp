const popupEdit = document.querySelector('.popup__type_edit');
const popupAdd = document.querySelector('.popup__type_add');
const popupOpenPhoto = document.querySelector('.popup__type_open-photo');
const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_info');
const editButton = document.querySelector('.profile-header__edit-button');
const addButton = document.querySelector('.profile-header__add-button');
const addForm = document.querySelector('.popup__container_type_add');
const placeInput = addForm.querySelector('.popup__input_value_place');
const linkInput = addForm.querySelector('.popup__input_value_link');
const galleryContainer = document.querySelector('.gallery');
const galleryTemplate = document.getElementById('gallery__template').content.querySelector('.gallery__item');
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

function handlePopupOpen(elem) {
  elem.classList.add('popup_opened');
  elem.classList.remove('preload');
  
  console.log('I ve been clicked');
}

function handleClosePopup(elem) {
  elem.classList.remove('popup_opened');

  console.log('I ve been closed');
}

function closePopup(elem) {
  const closeButton = elem.querySelector('.popup__button-close');
  const closeBackground = elem.querySelector('.popup__background');

  closeButton.addEventListener('click', () => {
    handleClosePopup(elem);
  });

  closeBackground.addEventListener('click', () => {
    handleClosePopup(elem);
  });
}

function handleFormSubmit(elem, onSubmit)  {
  const form = elem.querySelector('.popup__container');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
  
    onSubmit();
 
    handleClosePopup(elem);
  }); 
}

function handleDeleteElement(element) {
    element.remove();

    console.log('I ve been deleted');
}

function handleLikeElement(element) {
    element.querySelector('.gellary__like-button').classList.toggle('gellary__like-button_active');

    console.log('I ve been liked');
}

function handlePopupOpenPhoto(name, link) {
  handlePopupOpen(popupOpenPhoto);

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
    openWideButton.addEventListener('click', () => handlePopupOpenPhoto(name, link));

    return galleryElement;
}

initialCards.forEach(function (element) {
    const newGalleryElement = addGalleryElement(element.name, element.link);
    galleryContainer.append(newGalleryElement);
});

editButton.addEventListener('click', () => handlePopupOpen(popupEdit));
addButton.addEventListener('click', () => handlePopupOpen(popupAdd));

handleFormSubmit(popupEdit, () => {
  document.querySelector('.profile-header__user-name').textContent = nameInput.value;
  document.querySelector('.profile-header__user-description').textContent = jobInput.value;

  console.log('I ve been saved and edited');
});

handleFormSubmit(popupAdd, () => {
  const newGalleryElement = addGalleryElement(placeInput.value, linkInput.value)
  galleryContainer.prepend(newGalleryElement);
  addForm.reset();

  console.log('I ve been saved and added');
});

closePopup(popupEdit);
closePopup(popupAdd);
closePopup(popupOpenPhoto);

