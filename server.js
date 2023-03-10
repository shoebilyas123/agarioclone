// Agar.io clone
const express = require('express');
const helmet = require('helmet');
const socketio = require('socket.io');

const app = express();

app.use(helmet());
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 8082;

const expressServer = app.listen(PORT);
const io = socketio(expressServer);

module.exports = {
  app,
  io,
};
