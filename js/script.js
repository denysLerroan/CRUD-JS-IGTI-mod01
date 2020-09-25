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
  function insertName(newName) {
    globalNames.push(newName); //push adiciona na lista
  }

  function handleTyping(event) {
    // console.log(event); para detectar o value da tecla Enter
    if (event.key === 'Enter') {
      // console.log(event.target.value); capturando o value
      insertName(event.target.value);
    }
  }

  inputName.addEventListener('keyup', handleTyping);
  inputName.focus();
}
