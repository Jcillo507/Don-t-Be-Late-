const playerCar = { x: 0, y: 0 };

const playerMove = document.querySelector('.playerCar');
function movePlayerCar(x, y) {
  playerMove.style.left = `${(playerCar.x * 10).toString()}px`;
  playerMove.style.top = `${(playerCar.y * 10).toString()}px`;
}

function moveDown() {
  playerCar.y += 1;
  movePlayerCar(playerCar.x, playerCar.y);
}
function moveLeft() {
  playerCar.x -= 1;
  movePlayerCar(playerCar.x, playerCar.y);
}
function moveUp() {
  playerCar.y -= 1;
  movePlayerCar(playerCar.x, playerCar.y);
}
function moveRight() {
  playerCar.x += 1;
  movePlayerCar(playerCar.x, playerCar.y);
}
window.addEventListener('keydown', (evt) => {
  if ([37, 38, 39, 40].includes(evt.keyCode)) {
    evt.preventDefault();
  }
  switch (evt.keyCode) {
    case 37:
      moveLeft();
      break;
    case 38:
      moveUp();
      break;
    case 39:
      moveRight();
      break;
    case 40:
      moveDown();
      break;
    default:
  }
});
