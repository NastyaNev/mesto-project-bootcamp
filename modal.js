function openPopup(elem) {
    elem.classList.add('popup_opened');
    elem.classList.remove('preload');
    
    console.log("I've been clicked");
  }
  
  function closePopup(elem) {
    elem.classList.remove('popup_opened');
  
    console.log("I've been closed");
  }
  
  function handleClosePopup(elem) {
    const closeButton = elem.querySelector('.popup__button-close');
    const closeBackground = elem.querySelector('.popup__background');
  
    closeButton.addEventListener('click', () => {
      closePopup(elem);
    });
  
    closeBackground.addEventListener('mousedown', () => {
      closePopup(elem);
    });
  
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closePopup(elem);
        console.log("I've been pressed");
      }
    });
  }