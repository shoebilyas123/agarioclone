class Player {
  constructor(socketId, playerConfig, playerData) {
    this.id = socketId;
    this.playerConfig = playerConfig;
    this.playerData = playerData;
  }
}

module.exports = Player;
