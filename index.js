/* eslint - disable; */

const playerCar = {
  x: 32, y: 12, height: '20vh', width: '5vh',
};

const playerMove = document.querySelector('.playerCar');

playerMove.style.left = '650px';
playerMove.style.top = '240px';

const createBlueObstacle = () => {
  const obstacleCar = document.createElement('div');
  obstacleCar.classList.add('obstacleCar');
  obstacleCar.style.left = '625px';
  document.querySelector('.road').appendChild(obstacleCar);

  let position = 0;
  const obstacleCarInterval = setInterval(
    () => {
      if (position === 625) {
        obstacleCar.remove();
        clearInterval(obstacleCarInterval);
      } else {
        position += 1;
        obstacleCar.style.top = `${position}px`;
      }
    },
    1,
  );
  const collisionDetection = () => {
    if (
      playerCar.x < obstacleCar.x
        + parseInt(obstacleCar.width, 10)
        && parseInt(playerCar.width, 10) + playerCar.x
        > obstacleCar.x
        && playerCar.y < obstacleCar.y
        + parseInt(obstacleCar.height, 10)
        && playerCar.y + parseInt(playerCar.height, 10)
        > obstacleCar.y
    ) {
      console.log('working');
    }
  };
  collisionDetection();
  console.log(playerCar.x)
  console.log(obstacleCar.x)
};


const continousObstacleCars = () => {
  setInterval(() => {
    createBlueObstacle();
  }, 3000);
  // setInterval(() => {
  //   createBlackObstacle();
  // }, 3000);
  // setInterval(() => {
  //   createGreenObstacle();
  // }, 3000);
  // setInterval(() => {
  //   createYellowObstacle();
  // }, 3000);
};
continousObstacleCars();

const inGrid = (x, y) => {
  if (x < 0 || y < 0 || x > 67 || y > 24) {
    return false;
  }
  return true;
};
const onScreen = (x, y) => {
  if (!inGrid(x, y)) {
    return false;
  }
  return true;
};
// move player

const movePlayerCar = () => {
  playerMove.style.left = `${(playerCar.x * 20).toString()}px`;
  playerMove.style.top = `${(playerCar.y * 20).toString()}px`;
};
const moveDown = () => {
  if (onScreen(playerCar.x, playerCar.y + 1)) {
    playerCar.y += 1;
    movePlayerCar(playerCar.x, playerCar.y);
  }
};
const moveLeft = () => {
  if (onScreen(playerCar.x - 1, playerCar.y)) {
    playerCar.x -= 1;
    movePlayerCar(playerCar.x, playerCar.y);
  }
};
const moveUp = () => {
  if (onScreen(playerCar.x, playerCar.y - 1)) {
    playerCar.y -= 1;
    movePlayerCar(playerCar.x, playerCar.y);
  }
};
const moveRight = () => {
  if (onScreen(playerCar.x + 1, playerCar.y)) {
    playerCar.x += 1;
    movePlayerCar(playerCar.x, playerCar.y);
  }
};
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
