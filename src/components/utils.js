export function handleFormSubmit(popup, onSubmit) {
    const form = popup.querySelector('.popup__container');
  
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      onSubmit(evt);
    });
  }