import { openPhotoPopup, userId } from '../index';
import { getCards, deleteCards } from '../components/api';

export const galleryContainer = document.querySelector('.gallery');
const galleryTemplate = document.getElementById('gallery__template').content.querySelector('.gallery__item');

function deleteElement(element, id) {
  deleteCards(id)
    .then(() => {
      element.remove();
      console.log("I've been deleted");
    })
    .catch(err => {
      console.log(err);
    })
}

function likeElement(heart) {
  heart.classList.toggle('gellary__like-button_active');

  console.log("I've been liked");
}

function addDeleteElement(element, id) {
  const deleteButton = element.querySelector('.gallery__delete-button');

  deleteButton.classList.add('gallery__delete-button_active');
  deleteButton.addEventListener('click', () => deleteElement(element, id));

  console.log('Trash added');
}

export function addGalleryElement(name, link, cardId, ownerId, userId) {
  const galleryElement = galleryTemplate.cloneNode(true);

  const gallaryLink = galleryElement.querySelector('.gallery__photo');
  const gallaryName = galleryElement.querySelector('.gallery__caption');

  gallaryLink.src = link;
  gallaryName.textContent = name;
  gallaryLink.alt = name;
  
  if (ownerId === userId) {
    addDeleteElement(galleryElement, cardId);
    console.log("I've been compared");
  }

  const likeButton = galleryElement.querySelector('.gellary__like-button');
  const openWideButton = galleryElement.querySelector('.gallery__photo-button');

  likeButton.addEventListener('click', () => likeElement(likeButton));
  openWideButton.addEventListener('click', () => openPhotoPopup(name, link));

  return galleryElement;
}

getCards()
  .then(res => {
    res.forEach(function (element) {
      const newGalleryElement = addGalleryElement(element.name, element.link, element._id, element.owner._id, userId);
      galleryContainer.append(newGalleryElement);
    });
  })
  .catch(err => {
    console.log(err);
  })