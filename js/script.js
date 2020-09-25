window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null;

function start() {
  inputName = document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
  function handleTyping(event) {
    // console.log(event); para detectar o value da tecla Enter
    if (event.key === 'Enter') {
      console.log(event.target.value);
    }
  }

  inputName.focus();
  inputName.addEventListener('keyup', handleTyping);
}
