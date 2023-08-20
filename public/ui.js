// Set height and width of the canvas equal to window;

let wHeight = window.innerHeight;
let wWidth = window.innerWidth;
console.log({ wHeight, wWidth });

const canvas = document.getElementById('the-canvas');
const context = canvas.getContext('2d');

const player = {}; // "this" player

canvas.width = wWidth;
canvas.height = wHeight;

const loginModal = new bootstrap.Modal(document.querySelector('#loginModal'));
const spawnModal = new bootstrap.Modal(document.querySelector('#spawnModal'));

window.addEventListener('load', () => {
  loginModal.show();
});

window.addEventListener('resize', () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

document.querySelector('.name-form').addEventListener('submit', (e) => {
  e.preventDefault();
  player.name = document.querySelector('#name-input').value;
  console.log({ player });
  loginModal.hide();
  document.querySelector('.player-name').innerText = player.name;
  spawnModal.show();
});

document.querySelector('.start-game').addEventListener('click', (e) => {
  spawnModal.hide();
  const uiArr = Array.from(document.querySelectorAll('.hiddenOnStart'));
  uiArr.forEach((uiEl) => uiEl.removeAttribute('hidden'));
  init();
});
