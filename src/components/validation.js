function showError(input, settings, errorMessage) {
  const spanId = `error-${input.id}`;
  const spanError = document.getElementById(spanId);
  input.classList.add(settings.inputErrorClass);
  spanError.textContent = errorMessage;
}

export function hideError(input, settings) {
  const spanId = `error-${input.id}`;
  const spanError = document.getElementById(spanId);
  input.classList.remove(settings.inputErrorClass);
  spanError.textContent = '';
}

function checkValid(input, settings) {
  if (input.validity.valid) {
    hideError(input, settings);
  } else {
    showError(input, settings, input.validationMessage);
  }
}

function checkFormValidity(submitButton, form) {
  if (form.checkValidity()) {
    enableButon(submitButton);
  } else {
    disableButton(submitButton);
  }
}

function enableButon(submitButton) {
  submitButton.disabled = false;
}

export function disableButton(submitButton) {
  submitButton.disabled = true;
}

function setEventListeners(form, settings) {
  const inputList = form.querySelectorAll(settings.inputSelector);
  const submitButton = form.querySelector(settings.buttonSelector);
  checkFormValidity(submitButton, form);
  console.log("Validity check 1");
  inputList.forEach(input => {
    input.addEventListener('input', () => {
      checkValid(input, settings);
      checkFormValidity(submitButton, form);
      console.log("Validity check 2");
    });
  });
}

export function enableValidation(settings) {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach(form => { setEventListeners(form, settings) });
}


