// Purpose: Be the entry point for all express logic and code
const io = require('../servers').io;
const app = require('../servers').app;

// ==============CLASSES===========
const Orb = require('./classes/orbs');
const Player = require('./classes/player');
const PlayerConfig = require('./classes/playerConfig');
const PlayerData = require('./classes/playerData');

// =================VARIABLES============
//make an orbs array that will host 500/5000 NON-PLAYER orbs;
// every time an orb is absorbed, a new one is created
const orbs = [];
const settings = {
  defaultOrbsNum: 500,
  defaultSpeed: 6,
  defaultSize: 6,
  defaultZoom: 1.5,
  worldWidth: 500,
  worldHeight: 500,
  genericOrbSize: 6,
};
// initially we will start with 50

// =====================LOGIC=============
function initGame() {
  // loop 500 times and push a new orb onto our array
  for (let i = 0; i < settings.defaultOrbsNum; i++) orbs.push(new Orb());
}

io.on('connect', (socket) => {
  initGame();

  const playerConfig = new PlayerConfig(settings);
  const playerData = new PlayerData(player.name, settings);
  const player = new Player(socket.id, playerConfig, playerData);
  socket.emit('init', { orbs, player });
});

module.exports = io;
