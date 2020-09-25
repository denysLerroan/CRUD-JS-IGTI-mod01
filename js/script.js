window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null;

function start() {
  inputName = document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();
  render();
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
      render();
    }
  }

  inputName.addEventListener('keyup', handleTyping);
  inputName.focus();
}

function render() {
  function createDeleteButton(index) {
    function deleteName() {
      globalNames.splice(index, 1);
      render();
    }

    var button = document.createElement('button');
    button.classList.add('deleteButton'); // Adicionando classe CSS
    button.textContent = 'x';

    //Adicionando o evento de exclusão ao botão
    button.addEventListener('click', deleteName);

    return button;
  }

  var divNames = document.querySelector('#names');
  divNames.innerHTML = '';

  var ul = document.createElement('ul');

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    var li = document.createElement('li');
    var button = createDeleteButton(i);

    var span = document.createElement('span');
    span.textContent = currentName;

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  clearInput();
}

function clearInput() {
  inputName.value = '';
  inputName.focus();
}
