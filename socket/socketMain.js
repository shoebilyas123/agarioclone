// Purpose: Be the entry point for all express logic and code
const io = require('../servers').io;
const app = require('../servers').app;

const Orb = require('./classes/orbs');

//make an orbs array that will host 500/5000 NON-PLAYER orbs;
// every time an orb is absorbed, a new one is created
const orbs = [];
// initially we will start with 50

function initGame() {
  // loop 500 times and push a new orb onto our array
  for (let i = 0; i < 50; i++) orbs.push(new Orb());
}

io.on('connect', (socket) => {
  initGame();
  socket.emit('init', { orbs });
});

module.exports = io;
