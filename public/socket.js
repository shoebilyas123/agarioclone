const socket = io.connect('http://localhost:8080');

socket.on('init', (initData) => {
  orbs = initData.orbs;
});
