/* eslint - disable; */

const playerCar = {
  x: 32, y: 12, height: '180px', width: '45px',
};


const obstacleCars = [];

const playerMove = document.querySelector('.playerCar');

playerMove.style.left = '650px';
playerMove.style.top = '240px';
const isThereObstacle = (obstacleCar) => {
  const playerX = parseInt(playerCar.x, 10);
  const playerY = parseInt(playerCar.y, 10);
  const playerH = parseInt(playerCar.height, 10);
  const playerW = parseInt(playerCar.width, 10);
  const obstacleX = parseInt(obstacleCar.style.left, 10);
  const obstacleY = parseInt(obstacleCar.style.top, 10);
  const obstacleH = parseInt(obstacleCar.style.height, 10);
  const obstacleW = parseInt(obstacleCar.style.width, 10);

  if (
    (playerX * 20 < obstacleX + obstacleW)
    && ((playerX * 20) + playerW > obstacleX)
    && ((playerY * 20) < obstacleY + obstacleH)
    && ((playerY * 20) + playerH > obstacleY)

  ) {
    console.log('working');
    return true;
  }
  return false;
};

const createBlue = () => {
  const obstacleCar = document.createElement('div');
  obstacleCar.classList.add('blueCar');
  obstacleCar.style.left = `${Math.random() * 1424}px`;
  obstacleCar.style.height = '180px';
  obstacleCar.style.width = '45px';
  document.querySelector('.road').appendChild(obstacleCar);
  obstacleCars.push(obstacleCar);

  obstacleCar.y = 0;
  const obstacleCarInterval = setInterval(
    () => {
      if (obstacleCar.y === 625) {
        obstacleCar.remove();
        clearInterval(obstacleCarInterval);
        obstacleCars.splice(obstacleCar);
      } else {
        isThereObstacle(obstacleCar);
        obstacleCar.y += 1;
        obstacleCar.style.top = `${obstacleCar.y}px`;
      }
    },
    1,
  );
};
const createWhite = () => {
  const obstacleCar = document.createElement('div');
  obstacleCar.classList.add('whiteCar');
  obstacleCar.style.left = `${Math.random() * 1424}px`;
  obstacleCar.style.height = '180px';
  obstacleCar.style.width = '45px';
  document.querySelector('.road').appendChild(obstacleCar);
  obstacleCars.push(obstacleCar);

  obstacleCar.y = 0;
  const obstacleCarInterval = setInterval(
    () => {
      if (obstacleCar.y === 625) {
        obstacleCar.remove();
        clearInterval(obstacleCarInterval);
        obstacleCars.splice(obstacleCar);
      } else {
        isThereObstacle(obstacleCar);
        obstacleCar.y += 1;
        obstacleCar.style.top = `${obstacleCar.y}px`;
      }
    },
    1,
  );
};
const createRed = () => {
  const obstacleCar = document.createElement('div');
  obstacleCar.classList.add('redCar');
  obstacleCar.style.left = `${Math.random() * 1424}px`;
  obstacleCar.style.height = '180px';
  obstacleCar.style.width = '45px';
  document.querySelector('.road').appendChild(obstacleCar);
  obstacleCars.push(obstacleCar);

  obstacleCar.y = 0;
  const obstacleCarInterval = setInterval(
    () => {
      if (obstacleCar.y === 625) {
        obstacleCar.remove();
        clearInterval(obstacleCarInterval);
        obstacleCars.splice(obstacleCar);
      } else {
        isThereObstacle(obstacleCar);
        obstacleCar.y += 2;
        obstacleCar.style.top = `${obstacleCar.y}px`;
      }
    },
    1,
  );
};
const createGreen = () => {
  const obstacleCar = document.createElement('div');
  obstacleCar.classList.add('greenCar');
  obstacleCar.style.left = `${Math.random() * 1424}px`;
  obstacleCar.style.height = '180px';
  obstacleCar.style.width = '45px';
  document.querySelector('.road').appendChild(obstacleCar);
  obstacleCars.push(obstacleCar);

  obstacleCar.y = 0;
  const obstacleCarInterval = setInterval(
    () => {
      if (obstacleCar.y === 625) {
        obstacleCar.remove();
        clearInterval(obstacleCarInterval);
        obstacleCars.splice(obstacleCar);
      } else {
        isThereObstacle(obstacleCar);
        obstacleCar.y += 2;
        obstacleCar.style.top = `${obstacleCar.y}px`;
      }
    },
    1,
  );
};


const continousObstacleCars = () => {
  setInterval(() => {
    createBlue();
  }, 1000);
  setInterval(() => {
    createWhite();
  }, 3000);
  setInterval(() => {
    createRed();
  }, 2000);
  setInterval(() => {
    createGreen();
  }, 4000);
};
continousObstacleCars();

const inGrid = (x, y) => {
  if (x < 0 || y < 0 || x > 67 || y > 27) {
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
    playerCar.x -= 4;
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
    playerCar.x += 4;
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


let timeNow = 60;
setInterval(() => {
  timeNow -= 1;
  document.querySelector('.timer').innerHTML = timeNow;
}, 1000);
