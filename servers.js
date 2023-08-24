// Agar.io clone
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

const socketio = require('socket.io');
const PORT = 8080;

const expressServer = app.listen(PORT);
const io = socketio(expressServer);

// App organisation

module.exports = {
  app,
  io,
};
