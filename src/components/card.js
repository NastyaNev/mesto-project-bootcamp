import { openPhotoPopup, userId } from '../index';
import { getCards, deleteCards, setLike, deleteLike } from '../components/api';

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
      console.log("res", res.likes);

      likes.cardLikes = res.likes;

      console.log("likes", likes.cardLikes);
    })
    .then(() => {
      heart.classList.add('gellary__like-button_active');
      number.textContent = likes.cardLikes.length;
      console.log("number", number.textContent);
      console.log("I've been liked");
    })
    .catch(err => {
      console.log(err);
    })
}

function removeLike(heart, id, likes, number) {
  deleteLike(id)
    .then(res => {
      console.log("res", res.likes);

      likes.cardLikes = res.likes;
      console.log("likes", likes.cardLikes);
    })
    .then(() => {
      heart.classList.remove('gellary__like-button_active');
      number.textContent = likes.cardLikes.length;
      console.log("number", number.textContent);
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

  console.log("cardLikes", cardLikes);

  const likesArray = { cardLikes: cardLikes };

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

  likeButton.addEventListener('click', () => {
    if (cardLikes.some(item => item._id === userId)) {
      removeLike(likeButton, cardId, likesArray, likeNumber);
    } else {
      addLike(likeButton, cardId, likesArray, likeNumber);
    }
  });

  openWideButton.addEventListener('click', () => openPhotoPopup(name, link));

  return galleryElement;
}

getCards()
  .then(res => {
    res.forEach(function (element) {
      const newGalleryElement = addGalleryElement(element.likes, element.name, element.link, element._id, element.owner._id, userId);
      galleryContainer.append(newGalleryElement);
    });
  })
  .catch(err => {
    console.log(err);
  })