const init = () => {
  draw();
};

player.locX = Math.floor(500 * Math.random() + 10);
player.locY = Math.floor(500 * Math.random() + 10);
let orbs = [];

const drawPlayer = () => {
  context.beginPath();
  context.fillStyle = 'rgb(255,0,0)';
  context.arc(player.locX, player.locY, 10, 0, 2 * Math.PI);

  context.fill();
  context.lineWidth = 3;
  context.strokeStyle = 'rgb(0,255,0)';
  context.stroke();
};

const drawOrb = (orb) => {
  context.beginPath();
  context.fillStyle = orb.color;
  context.arc(orb.locX, orb.locY, 10, 0, 2 * Math.PI);
  context.fill();
};

const drawOrbsCollection = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  orbs.forEach((orb) => drawOrb(orb));
  drawPlayer();
};

const draw = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.setTransform(1, 0, 0, 1, 0, 0);
  const camX = -player.locX + canvas.width / 2;
  const camY = -player.locY + canvas.height / 2;
  context.translate(camX, camY);

  //   drawPlayer();
  drawOrbs();
  //Controlled loop
  //  Runs recursively every frame
  //   if fps  = 35
  requestAnimationFrame(draw);
};

canvas.addEventListener('mousemove', (event) => {
  const mousePosition = {
    x: event.clientX,
    y: event.clientY,
  };

  const angleDeg =
    (Math.atan2(
      mousePosition.y - canvas.height / 2,
      mousePosition.x - canvas.width / 2
    ) *
      180) /
    Math.PI;
  if (angleDeg >= 0 && angleDeg < 90) {
    xVector = 1 - angleDeg / 90;
    yVector = -(angleDeg / 90);
  } else if (angleDeg >= 90 && angleDeg <= 180) {
    xVector = -(angleDeg - 90) / 90;
    yVector = -(1 - (angleDeg - 90) / 90);
  } else if (angleDeg >= -180 && angleDeg < -90) {
    xVector = (angleDeg + 90) / 90;
    yVector = 1 + (angleDeg + 90) / 90;
  } else if (angleDeg < 0 && angleDeg >= -90) {
    xVector = (angleDeg + 90) / 90;
    yVector = 1 - (angleDeg + 90) / 90;
  }

  speed = 1;
  xV = xVector;
  yV = yVector;

  if ((player.locX < 5 && xV < 0) || (player.locX > 500 && xV > 0)) {
    player.locY -= speed * yV;
  } else if ((player.locY < 5 && yV > 0) || (player.locY > 500 && yV < 0)) {
    player.locX += speed * xV;
  } else {
    player.locX += speed * xV;
    player.locY -= speed * yV;
  }
});
