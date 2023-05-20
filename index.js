const editButton = document.querySelector('.profile-header__edit-button');
const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup__type_edit');
const closePopupButtons = document.querySelectorAll('.popup__button-close');
const formElementEdit = document.querySelector('.popup__container_type_edit');
const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_info');
const addButton = document.querySelector('.profile-header__add-button');
const popupAdd = document.querySelector('.popup__type_add');
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

function popupEditOpen() {
    popupEdit.classList.add('popup_opened');

    console.log('I ve been clicked');
}

function popupAddOpen() {
    popupAdd.classList.add('popup_opened');

    console.log('I ve been clicked');
};

closePopupButtons.forEach(closePopupButton => closePopupButton.addEventListener('click', function() {
    popups.forEach(function(popup) {
        popup.classList.remove('popup_opened');
    });

    console.log('I ve been closed');
}));

function handleFormSubmitEdit(evt) {
    evt.preventDefault();
  
    const userName = document.querySelector('.profile-header__user-name');
    const userInfo = document.querySelector('.profile-header__user-description');
    
    userName.textContent = nameInput.value;
    userInfo.textContent = jobInput.value;

    console.log('I ve been saved');
}

submits.forEach(submit => submit.addEventListener('click', function() {
    popups.forEach(function(popup) {
        popup.classList.remove('popup_opened');
    });

    console.log('I ve been saved and closed');
}));

function handleDeleteElement(element) {
    element.remove();

    console.log('I ve been deleted');
}

function handleLikeElement(element) {
    element.querySelector('.gellary__like-button').classList.toggle('gellary__like-button_active');

    console.log('I ve been liked');
}

function handleOpenWidePopup(popupOpenPhoto) {
    popupOpenPhoto.classList.add('popup_opened');

    const photoPopupElement = document.querySelector('.popup__container_photo-active');
    
    const galleryCaption = document.querySelector('.gallery__caption');
    const popupPhotoCaption = photoPopupElement.querySelector('.popup__photo-caption');
    const galleryPhoto = document.querySelector('.gallery__photo');
    const popupPhoto = photoPopupElement.querySelector('.popup__photo');
    
    popupPhotoCaption.textContent = galleryCaption.textContent;
    popupPhoto.src = galleryPhoto.src;
    popupPhoto.alt = galleryCaption.textContent;

    console.log('I ve been wide-opened');
}

function addGalleryElement(name) {
    const galleryElement = galleryTemplate.cloneNode(true);

    const galleryCaption = galleryElement.querySelector('.gallery__caption');
    const galleryPhoto = galleryElement.querySelector('.gallery__photo');

    const deleteButton = galleryElement.querySelector('.gallery__delete-button');
    const likeButton = galleryElement.querySelector('.gellary__like-button');
    const openWideButton = galleryElement.querySelector('.gallery__photo-button');
    const popupOpenPhoto = document.querySelector('.popup__type_open-photo');

    galleryCaption.textContent = name;

    galleryCaption.textContent = placeInput.value;
    galleryPhoto.src = linkInput.value;
    galleryPhoto.alt = placeInput.value;

    deleteButton.addEventListener('click', () => handleDeleteElement(galleryElement));
    likeButton.addEventListener('click', () => handleLikeElement(galleryElement));
    openWideButton.addEventListener('click', () => handleOpenWidePopup(popupOpenPhoto));

    return galleryElement;
}

function handleFormSubmitAdd(evt) {
    evt.preventDefault();
    const newGalleryElement = addGalleryElement(linkInput.value);
    galleryContainer.prepend(newGalleryElement);

    addForm.reset();

    console.log('I ve been created');
}

initialCards.forEach(function (element) {
    const newGalleryElement = addGalleryElement(element);

    newGalleryElement.querySelector('.gallery__caption').textContent = element.name;
    newGalleryElement.querySelector('.gallery__photo').src = element.link;

    galleryContainer.append(newGalleryElement);
});

editButton.addEventListener('click', popupEditOpen);
addButton.addEventListener('click', popupAddOpen);
formElementEdit.addEventListener('submit', handleFormSubmitEdit); 
addForm.addEventListener('submit', handleFormSubmitAdd);