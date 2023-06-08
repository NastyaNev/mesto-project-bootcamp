import { openPhotoPopup, userId } from '../index';
import { getCards, deleteCards } from '../components/api';

export const galleryContainer = document.querySelector('.gallery');
const galleryTemplate = document.getElementById('gallery__template').content.querySelector('.gallery__item');
let cardId;

// function deleteElement(cardId, element) {
//   deleteCards(cardId)
//     .then(res => {
//       element.remove();

//       console.log("I've been deleted");
//     })
//     .catch(err => {
//       console.log(err);
//     })
// }
function deleteElement(element) {
  element.remove();

  console.log("I've been deleted");
}

function likeElement(heart) {
  heart.classList.toggle('gellary__like-button_active');

  console.log("I've been liked");
}

export function addGalleryElement(name, link, ownerId, cardId) {
  const galleryElement = galleryTemplate.cloneNode(true);

  const gallaryLink = galleryElement.querySelector('.gallery__photo');
  const gallaryName = galleryElement.querySelector('.gallery__caption');

  gallaryLink.src = link;
  gallaryName.textContent = name;
  gallaryLink.alt = name;

  if (ownerId === userId) {
    addDeleteElement(galleryElement);

    console.log("I've been compared");
  }
  // console.log('userId, ownerId', userId, ownerId)

  // const deleteButton = galleryElement.querySelector('.gallery__delete-button');
  const likeButton = galleryElement.querySelector('.gellary__like-button');
  const openWideButton = galleryElement.querySelector('.gallery__photo-button');

  // deleteButton.addEventListener('click', () => deleteElement(galleryElement));
  likeButton.addEventListener('click', () => likeElement(likeButton));
  openWideButton.addEventListener('click', () => openPhotoPopup(name, link));

  return galleryElement;
}

function addDeleteElement(element) {
  const deleteButton = element.querySelector('.gallery__delete-button');

  deleteButton.classList.add('gallery__delete-button_active');
  deleteButton.addEventListener('click', () => deleteElement(element));

  console.log('Trash');
}

getCards()
  .then(res => {
    res.forEach(function (element) {
      const newGalleryElement = addGalleryElement(element.name, element.link, element.owner._id);
      cardId = element._id;
      galleryContainer.append(newGalleryElement);
      console.log('cardId', cardId);
    });
  })
  .catch(err => {
    console.log(err);
  })


