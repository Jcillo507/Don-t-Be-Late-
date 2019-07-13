/* eslint-disable */
// moves car
const playerCar = { x: 32, y: 12 };
const playerMove = document.querySelector('.playerCar');
// const obstacleCars = {};

playerMove.style.left = '650px';
playerMove.style.top = '240px';

const isOnRoad = (x, y) => {
  if (x < 0 || y < 0 || x > 67 || y > 24) {
    return false;
  }
  return true;
};

const onScreen = (x, y) => {
  if (!isOnRoad(x, y)) {
    return false;
  }
  return true;
};

function movePlayerCar() {
  playerMove.style.left = `${(playerCar.x * 20).toString()}px`;
  playerMove.style.top = `${(playerCar.y * 20).toString()}px`;
}

function moveDown() {
  if (onScreen(playerCar.x, playerCar.y + 1)) {
    playerCar.y += 1;
    movePlayerCar(playerCar.x, playerCar.y);
  }
}
function moveLeft() {
  if (onScreen(playerCar.x - 1, playerCar.y)) {
    playerCar.x -= 1;
    movePlayerCar(playerCar.x, playerCar.y);
  }
}
function moveUp() {
  if (onScreen(playerCar.x, playerCar.y - 1)) {
    playerCar.y -= 1;
    movePlayerCar(playerCar.x, playerCar.y);
  }
}
function moveRight() {
  if (onScreen(playerCar.x + 1, playerCar.y)) {
    playerCar.x += 1;
    movePlayerCar(playerCar.x, playerCar.y);
  }
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
// creates obstacles
const createNewObstacle = () => {
  const obstacleCar = document.createElement('div');
  obstacleCar.classList.add('obstacleCar');
  obstacleCar.style.left = `${Math.random() * 1424}px`;
  document.querySelector('.road').appendChild(obstacleCar);
};
createNewObstacle();
// setInterval(createNewObstacle, 2000);
