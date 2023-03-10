function init() {
  draw();
}

let randomX = Math.floor(500 * Math.random() + 100);
let randomY = Math.floor(500 * Math.random() + 100);

console.log({ randomX, randomY });

function draw() {
  ctx.beginPath();
  ctx.fillStyle = 'rgb(255,0,0)';

  ctx.arc(randomX, randomY, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'rgb(0,255,0)';
  ctx.stroke();

  requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', (event) => {
  let mousePosition = { x: event.clientX, y: event.clientY };
  let playerAngle =
    (Math.atan2(
      mousePosition.y - canvas.height / 2,
      mousePosition.x - canvas.width / 2
    ) *
      180) /
    Math.PI;

  if (playerAngle >= 0 && playerAngle < 90) {
  } else if (playerAngle >= 0 && playerAngle < 90) {
  } else if (playerAngle >= 0 && playerAngle < 90) {
  } else if (playerAngle >= 0 && playerAngle < 90) {
  }
});
