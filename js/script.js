window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];

function start() {
  preventFormSubmit();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}
