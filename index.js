const inputsForm = document.getElementById('inputs-form');
const inputs = document.querySelectorAll('.input-list input');


function errorChecking() {

  inputs.forEach(input => {
    const listItem = input.parentElement;
    const errorIcon = listItem.querySelector('.error-icon');
    const errorMessage = listItem.querySelector('.error-message');
    const errorEnable = () => {errorIcon.hidden = false;
      errorMessage.hidden = false; input.placeholder = ''; input.classList.add('border-red');};
    const errorDisable = () => {
      const inputPlaceHolder = input.placeholder; 
      input.placeholder = inputPlaceHolder;
      input.classList.remove('border-red');
      errorIcon.hidden = true;
      errorMessage.hidden = true; 
    };
    

    if (input.value.trim() === '' & input.type !== 'email') {
      errorEnable();

    } else {
      errorDisable();
    }

    if (input.type === 'email') {
      if (input.value.trim() === '') {
        errorEnable();

      } else if (!input.value.match(/^[A-Za-z._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/)) {
        input.style.color = 'hsl(0, 100%, 74%)';
        errorEnable();
        errorMessage.innerHTML = "Looks like this is not a valid email";

      } else {
        input.style.color = 'black';
        errorDisable();
      }
    }


  })
}

inputsForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  errorChecking();

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      errorChecking();
    })
  })
})

