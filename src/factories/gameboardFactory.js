import _ from 'lodash';

const gameboardFactory = (ownerName) => {
  const boardInfo = {
    board: [],
    shipsLeft: true,
    owner: ownerName,
  };

  const initBoard = () => {
    for (let i = 0; i < 100; i++) {
      boardInfo.board.push({
        ship: false,
        beenHit: false,
      });
    }
  };

  if (_.isEmpty(boardInfo.board)) {
    initBoard();
  }

  const allShipSunk = () => {
    for (let square of boardInfo.board) {
      if (square.ship !== false) {
        if (square.beenHit === false) {
          boardInfo.shipsLeft = true;
          return;
        }
      }
    }
    boardInfo.shipsLeft = false;
  };

  const receiveAttack = (coords) => {
    boardInfo.board[coords].beenHit = true;
    allShipSunk();
  };

  const placeShip = (ship, startCoord) => {
    if (ship.isVertical) {
      for (let i = 0; i < ship.length; i++) {
        boardInfo.board[startCoord + i * 10].ship = ship.id;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        boardInfo.board[startCoord + i].ship = ship.id;
      }
    }
  };

  return { boardInfo, receiveAttack, placeShip };
};

export default gameboardFactory;
