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

function likeElement(heart, id, userId) {
  setLike(id)
    .then(res => {
      const likesArray = res.likes;
      console.log('likesArray', likesArray);

      likesArray.forEach(element => {
        if (element._id !== userId) {
          heart.classList.add('gellary__like-button_active');
          console.log("I've been liked");
        } else {
          unlikeElement(heart, id, userId);
          console.log("I've been unliked");
        }
      })
    })
    .catch(err => {
      console.log(err);
    })

  // console.log("likeId", id);
}

function unlikeElement(heart, id, userId) {
  deleteLike(id)
    .then(() => {
      heart.classList.remove('gellary__like-button_active');
    })
    // .then(res => {
    //   const likesArray = res.likes;
    //   console.log('likesArray', likesArray);

    //   likesArray.forEach(element => {
    //     if (element._id === userId) {
    //       element.remove();
    //       // heart.classList.remove('gellary__like-button_active');
    //       console.log("I've been unliked");
    //     } else {
    //       console.log("Haven't been liked yet")
    //     }
    //   })
    // })
    .catch(err => {
      console.log(err);
    })

  // console.log("likeId", id);
}

function isLiked(element, id, userId) {
  const likeButton = element.querySelector('.gellary__like-button');

  // likeButton.classList.add('gellary__like-button_active');
  likeButton.addEventListener('click', () => likeElement(likeButton, id, userId));
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

  isLiked(galleryElement, cardId, userId);

  // const likeButton = galleryElement.querySelector('.gellary__like-button');
  const openWideButton = galleryElement.querySelector('.gallery__photo-button');

  // likeButton.addEventListener('click', () => likeElement(likeButton, cardId));
  // likeButton.addEventListener('click', () => unlikeElement(likeButton, cardId));
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