export const galleryContainer = document.querySelector('.gallery');
const galleryTemplate = document.getElementById('gallery__template').content.querySelector('.gallery__item');

function deleteElement(element) {
  element.remove();

  console.log("I've been deleted");
}

function likeElement(heart) {
  heart.classList.toggle('gellary__like-button_active');

  console.log("I've been liked");
}

export function addGalleryElement(name, link) {
  const galleryElement = galleryTemplate.cloneNode(true);

  const gallaryLink = galleryElement.querySelector('.gallery__photo');
  const gallaryName = galleryElement.querySelector('.gallery__caption');

  gallaryLink.src = link;
  gallaryName.textContent = name;
  gallaryLink.alt = name;
 
  // if (gallaryName.textContent === 'Псков') {
  //   addDeleteElement(galleryElement);
  // }

  const deleteButton = galleryElement.querySelector('.gallery__delete-button');
  const likeButton = galleryElement.querySelector('.gellary__like-button');
  const openWideButton = galleryElement.querySelector('.gallery__photo-button');

  deleteButton.addEventListener('click', () => deleteElement(galleryElement));
  likeButton.addEventListener('click', () => likeElement(likeButton));
  openWideButton.addEventListener('click', () => openPhotoPopup(name, link));

  return galleryElement;
}

// export function addDeleteElement(element) {
//   const deleteButton = element.querySelector('.gallery__delete-button');

//   deleteButton.classList.add('gallery__delete-button_active');
//   deleteButton.addEventListener('click', () => deleteElement(element));

//   console.log('Trash');
// }

getCards()
  .then(res => {
    res.forEach(function (element) {
      const newGalleryElement = addGalleryElement(element.name, element.link);
      galleryContainer.append(newGalleryElement);
    });
  })
  .catch(err => {
    console.log(err);
  })

import { openPhotoPopup } from '../index';
import { getCards } from '../components/api';
