import { openPhotoPopup } from '../components/modal';
import { deleteCards, setLike, deleteLike } from '../components/api';

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

function addLike(heart, id, likes, number) {
  setLike(id)
    .then(res => {
      likes.cardLikes = res.likes;
    })
    .then(() => {
      heart.classList.add('gellary__like-button_active');
      number.textContent = likes.cardLikes.length;

      console.log("I've been liked");
    })
    .catch(err => {
      console.log(err);
    })
}

function removeLike(heart, id, unlikes, number) {
  deleteLike(id)
    .then(res => {
      unlikes.cardLikes = res.likes;
    })
    .then(() => {
      heart.classList.remove('gellary__like-button_active');
      number.textContent = unlikes.cardLikes.length;

      console.log("I've been unliked");
    })
    .catch(err => {
      console.log(err);
    })
}

function addDeleteElement(element, id) {
  const deleteButton = element.querySelector('.gallery__delete-button');

  deleteButton.classList.add('gallery__delete-button_active');
  deleteButton.addEventListener('click', () => deleteElement(element, id));

  console.log('Trash added');
}

export function addGalleryElement(cardLikes, name, link, cardId, ownerId, userId) {
  const galleryElement = galleryTemplate.cloneNode(true);

  const gallaryLink = galleryElement.querySelector('.gallery__photo');
  const gallaryName = galleryElement.querySelector('.gallery__caption');
  const likeNumber = galleryElement.querySelector('.gallery__like-quantity');

  const likesObj = { cardLikes: cardLikes };
  likeNumber.textContent = cardLikes.length;

  gallaryLink.src = link;
  gallaryName.textContent = name;
  gallaryLink.alt = name;

  if (ownerId === userId) {
    addDeleteElement(galleryElement, cardId);
    console.log("I've been compared");
  }

  const likeButton = galleryElement.querySelector('.gellary__like-button');
  const openWideButton = galleryElement.querySelector('.gallery__photo-button');

  if (cardLikes.some(item => item._id === userId)) {
    likeButton.classList.add('gellary__like-button_active');
  }

  likeButton.addEventListener('click', () => {
    if (likesObj.cardLikes.some(item => item._id === userId)) {
      removeLike(likeButton, cardId, likesObj, likeNumber);
    } else {
      addLike(likeButton, cardId, likesObj, likeNumber);
    }
  });

  openWideButton.addEventListener('click', () => openPhotoPopup(name, link));

  return galleryElement;
}