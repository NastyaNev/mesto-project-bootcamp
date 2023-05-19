const editButton = document.querySelector('.profile-header__edit-button');
const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup__edit');
const closePopupButtons = document.querySelectorAll('.popup__button-close');
const formElementEdit = document.querySelector('.popup__container_edit');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_info');
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

closePopupButtons.forEach(closePopupButton => closePopupButton.addEventListener('click', function() {
    console.log('I ve been closed');
    popups.forEach(function(popup) {
        popup.classList.remove('popup_opened');
    });
}));

editButton.addEventListener('click', popupEditOpen);
addButton.addEventListener('click', popupAddOpen);

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

// Array

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

// Cards buttons

const galleryTemplate = document
    .getElementById('gallery__template')
    .content.querySelector('.gallery__item');

function handleDeleteElement(element) {
    console.log('I ve been deleted');
    element.remove();
}

function handleLikeElement(element) {
    console.log('I ve been liked');
    element.querySelector('.gellary__like-button').classList.toggle('gellary__like-button_active');
}

initialCards.forEach(initialCard => function createPhotoPopupElement(name) {
    const photoPopupElement = document.querySelector('.popup__open-photo');

    const galleryCaption = initialCard.querySelector('.gallery__caption');
    const popupPhotoCaption = photoPopupElement.querySelector('.popup__photo-caption');
    const galleryPhoto = initialCard.querySelector('.gallery__photo');
    const popupPhoto = photoPopupElement.querySelector('.popup__photo');

    popupPhotoCaption.textContent = name; 
    
    popupPhotoCaption.textContent = galleryCaption.textContent;
    popupPhoto.src = galleryPhoto.src;
    popupPhoto.alt = galleryCaption.textContent;

    return photoPopupElement;
});

function handleOpenWidePopup(popup) {
    console.log('I ve been wide-opened');
    popup.classList.add('popup_opened');
    
    // createPhotoPopupElement();
}

// Add cards

function addGalleryElement(name) {
    const galleryElement = galleryTemplate.cloneNode(true);

    const galleryCaption = galleryElement.querySelector('.gallery__caption');
    const galleryPhoto = galleryElement.querySelector('.gallery__photo');

    const deleteButton = galleryElement.querySelector('.gallery__delete-button');
    const likeButton = galleryElement.querySelector('.gellary__like-button');
    const openWideButton = galleryElement.querySelector('.gallery__photo-button');
    const popupOpenPhoto = document.querySelector('.popup__open-photo');

    galleryCaption.textContent = name;

    galleryCaption.textContent = placeInput.value;
    galleryPhoto.src = linkInput.value;
    galleryPhoto.alt = placeInput.value;

    deleteButton.addEventListener('click', () => handleDeleteElement(galleryElement));
    likeButton.addEventListener('click', () => handleLikeElement(galleryElement));
    openWideButton.addEventListener('click', () => handleOpenWidePopup(popupOpenPhoto));

    return galleryElement;
}

const addForm = document.querySelector('.popup__container_add');
const placeInput = addForm.querySelector('.popup__input_place');
const linkInput = addForm.querySelector('.popup__input_link');
const galleryContainer = document.querySelector('.gallery');

function handleFormSubmitAdd(evt) {
    evt.preventDefault();
    const newGalleryElement = addGalleryElement(linkInput.value);
    galleryContainer.prepend(newGalleryElement);

    addForm.reset();

    console.log('I ve been created');
}

addForm.addEventListener('submit', handleFormSubmitAdd);

initialCards.forEach(function (element) {
    const newGalleryElement = addGalleryElement(element);

    newGalleryElement.querySelector('.gallery__caption').textContent = element.name;
    newGalleryElement.querySelector('.gallery__photo').src = element.link;

    galleryContainer.append(newGalleryElement);
});

// // Photo wide-open
// const galleryPhotoButtons = galleryContainer.querySelectorAll('.gallery__photo-button');
// const popupOpenPhoto = document.querySelector('.popup__open-photo');

// galleryPhotoButtons.forEach(galleryPhotoButton => galleryPhotoButton.addEventListener('click', function() {
//     console.log('I ve been wide-opened');    
    
//     popupOpenPhoto.classList.add('popup_opened');


//     const galleryCaption = galleryContainer.querySelector('.gallery__caption');
//     const popupPhotoCaption = galleryContainer.querySelector('.popup__photo-caption');
//     const galleryPhoto = galleryContainer.querySelector('.gallery__photo');
//     const popupPhoto = galleryContainer.querySelector('.popup__photo');
    
//     popupPhotoCaption.textContent = galleryCaption.textContent;
//     popupPhoto.src = galleryPhoto.src;
//     popupPhoto.alt = galleryCaption.textContent;
// }));

// directors.forEach(function (element) {
    //     const directorElement = directorTemplate.cloneNode(true);
      
    //     directorElement.querySelector('.directors__name').textContent = element.name;
    //     directorElement.querySelector('.directors__description').textContent = element.career;
    //     directorElement.querySelector('.directors__films').href = element.films;
      
    //     directorsList.append(directorElement)
    //   })







// Like button
// const likeButtons = document.querySelectorAll('.gellary__like-button');

// likeButtons.forEach(likeButton => likeButton.addEventListener('click', function() {
//     console.log('I ve been liked');
//     likeButton.classList.toggle('gellary__like-button_active');
// }));

// Delete button
// const deleteButtons = document.querySelectorAll('.gallery__delete-button');

// deleteButtons.forEach(deleteButton => deleteButton.addEventListener('click', function() {
//     console.log('I ve been deleted');
//     const galleryItem = document.querySelector('.gallery__item');
//     galleryItem.remove();
// }));


// Photo wide-open
// const galleryPhotoButtons = document.querySelectorAll('.gallery__photo-button');
// const popupsOpenPhoto = document.querySelectorAll('.popup__open-photo');

// galleryPhotoButtons.forEach(galleryPhotoButton => galleryPhotoButton.addEventListener('click', function() {
//     console.log('I ve been wide-opened');    
//     popupsOpenPhoto.forEach(function(popupOpenPhoto) {
//         popupOpenPhoto.classList.add('popup_opened');
//     });

//     const galleryCaption = document.querySelector('.gallery__caption');
//     const popupPhotoCaption = document.querySelector('.popup__photo-caption');
//     const galleryPhoto = document.querySelector('.gallery__photo');
//     const popupPhoto = document.querySelector('.popup__photo');
    
//     popupPhotoCaption.textContent = galleryCaption.textContent;
//     popupPhoto.src = galleryPhoto.src;
//     popupPhoto.alt = galleryCaption.textContent;
// }));





