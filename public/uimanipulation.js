let wHeight = window.innerHeight;
let wWidth = window.innerWidth;
let player = {
  name: '',
};

let loginModal = document.getElementById('loginModal');
let spawnModal = document.getElementById('spawnModal');
let canvas = document.getElementById('the-canvas');
let nameForm = document.querySelector('.name-form');
let playerNameSpan = document.querySelector('.player-name');
let hiddenOnStart = document.getElementsByClassName('hiddenOnStart');
let playSoloBtn = document.getElementById('play-solo-btn');

let ctx = canvas.getContext('2d');

canvas.height = wHeight;
canvas.width = wWidth;

window.onload = (event) => {
  loginModal.classList.remove('fade');
  loginModal.classList.add('show');
};

nameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.querySelector('#name-input').value;

  if (!nameInput) return;

  player.name = nameInput;

  loginModal.classList.add('hide');
  loginModal.classList.remove('show');

  spawnModal.classList.add('show');
  spawnModal.classList.remove('fade');

  playerNameSpan.innerHTML = player.name;

  Array.from(hiddenOnStart).forEach((element) =>
    element.removeAttribute('hidden')
  );

  init();
});

playSoloBtn.addEventListener('click', () => {
  spawnModal.classList.add('fade');
  spawnModal.classList.remove('show');
});
