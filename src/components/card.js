export const galleryContainer = document.querySelector('.gallery');
const galleryTemplate = document.getElementById('gallery__template').content.querySelector('.gallery__item');

// const initialCards = [
//   {
//     name: 'Пушкин',
//     link: 'https://nastyanpictures1.s3.eu-north-1.amazonaws.com/Pushkin.jpg'
//   },
//   {
//     name: 'Рускеала',
//     link: 'https://nastyanpictures1.s3.eu-north-1.amazonaws.com/Ruskeala.jpg'
//   },
//   {
//     name: 'Санкт-Петербург',
//     link: 'https://nastyanpictures1.s3.eu-north-1.amazonaws.com/Saint-P.jpg'
//   },
//   {
//     name: 'Тургояк',
//     link: 'https://nastyanpictures1.s3.eu-north-1.amazonaws.com/Tyrgoyak.jpg'
//   },
//   {
//     name: 'Ульяновск',
//     link: 'https://nastyanpictures1.s3.eu-north-1.amazonaws.com/Ulyanovsk.jpg'
//   },
//   {
//     name: 'Псков',
//     link: 'https://nastyanpictures1.s3.eu-north-1.amazonaws.com/Pskov.jpg'
//   }
// ];

function deleteElement(element) {
  element.remove();

  console.log("I've been deleted");
}

function likeElement(likeButton) {
  likeButton.classList.toggle('gellary__like-button_active');

  console.log("I've been liked");
}

export function addGalleryElement(name, link) {
  const galleryElement = galleryTemplate.cloneNode(true);

  const galaryLink = galleryElement.querySelector('.gallery__photo');
  const galaryName = galleryElement.querySelector('.gallery__caption');

  galaryLink.src = link;
  galaryName.textContent = name;
  galaryLink.alt = name;

  const deleteButton = galleryElement.querySelector('.gallery__delete-button');
  const likeButton = galleryElement.querySelector('.gellary__like-button');
  const openWideButton = galleryElement.querySelector('.gallery__photo-button');

  deleteButton.addEventListener('click', () => deleteElement(galleryElement));
  likeButton.addEventListener('click', () => likeElement(likeButton));
  openWideButton.addEventListener('click', () => openPhotoPopup(name, link));

  return galleryElement;
}

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
