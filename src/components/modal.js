export function openPopup(elem) {
    elem.classList.add('popup_opened');
    elem.classList.remove('preload');
    document.addEventListener('keydown', closeByEsc);
    
    console.log("I've been clicked");
  }
  
  export function closePopup(elem) {
    elem.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
  
    console.log("I've been closed");
  }

  function closeByEsc(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
  }

  export function handleCloseByBackground(elem) {
    const closeBackground = elem.querySelector('.popup__background');

    closeBackground.addEventListener('mousedown', () => {
      closePopup(elem);
    });
  }
  
  export function handleClosePopup(elem) {
    const closeButton = elem.querySelector('.popup__button-close');
    
    closeButton.addEventListener('click', () => {
      closePopup(elem);
    });
  }