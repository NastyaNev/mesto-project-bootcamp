function handleSubmitValid(evt) {
  evt.preventDefault();
  
}

function showError(input, errorMessage) {
  const spanId = `error-${input.id}`;
  const spanError = document.getElementById(spanId);
  spanError.textContent = errorMessage;
}

function hideError(input) {
  const spanId = `error-${input.id}`;
  const spanError = document.getElementById(spanId);
  spanError.textContent = '';
}

function checkValid(input) {
  if(input.validity.valid) {
    hideError(input);
  } else {
    showError(input, input.validationMessage);
  }
}

function checkFormValidity(submitButton, form) {
  if(form.checkValidity()) {
    enableButon(submitButton);
  } else {
    disableButton(submitButton);
  }
}

function enableButon(submitButton) {
  submitButton.disabled = false;
}

function disableButton(submitButton) {
  submitButton.disabled = true;
}

function setEventListeners(form) {
    const inputList = form.querySelectorAll('.popup__input');
    const submitButton = form.querySelector('.popup__button-save');
    checkFormValidity(submitButton, form);
    console.log("Validity checked 1");
    inputList.forEach(input => {
        input.addEventListener('input', () => {
            checkValid(input);
            checkFormValidity(submitButton, form);
            console.log("Validity checked 2");
        });
    });
}

function enableValidation() {
    const formList = document.querySelectorAll('.form');
    formList.forEach(form => {setEventListeners(form)});
}


