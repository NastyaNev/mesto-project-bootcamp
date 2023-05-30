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

function openPopup(elem) {
  elem.classList.add('popup_opened');
  elem.classList.remove('preload');
  
  console.log('I ve been clicked');
}

function closePopup(elem) {
  elem.classList.remove('popup_opened');

  console.log('I ve been closed');
}

function handleClosePopup(elem) {
  const closeButton = elem.querySelector('.popup__button-close');
  const closeBackground = elem.querySelector('.popup__background');

  closeButton.addEventListener('click', () => {
    closePopup(elem);
  });

  closeBackground.addEventListener('mousedown', () => {
    closePopup(elem);
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePopup(elem);
      console.log("I've been pressed");
    }
  });
}

function handleFormSubmit(elem, onSubmit)  {
  const form = elem.querySelector('.popup__container');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
  
    onSubmit();
 
    closePopup(elem);
  }); 
}

function deleteElement(element) {
    element.remove();

    console.log('I ve been deleted');
}

function likeElement(element) {
    element.querySelector('.gellary__like-button').classList.toggle('gellary__like-button_active');

    console.log('I ve been liked');
}

function openPhotoPopup(name, link) {
  openPopup(popupSeePhoto);

  popupSeePhoto.querySelector('.popup__photo').src = link;
  popupSeePhoto.querySelector('.popup__photo-caption').textContent = name;
  popupSeePhoto.querySelector('.popup__photo').alt = name;

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

    deleteButton.addEventListener('click', () => deleteElement(galleryElement));
    likeButton.addEventListener('click', () => likeElement(galleryElement));
    openWideButton.addEventListener('click', () => openPhotoPopup(name, link));

    return galleryElement;
}

initialCards.forEach(function (element) {
    const newGalleryElement = addGalleryElement(element.name, element.link);
    galleryContainer.append(newGalleryElement);
});

editButton.addEventListener('click', () => openPopup(popupEdit));
addButton.addEventListener('click', () => openPopup(popupAdd));

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

handleClosePopup(popupEdit);
handleClosePopup(popupAdd);
handleClosePopup(popupSeePhoto);

