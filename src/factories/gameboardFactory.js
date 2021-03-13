import _ from 'lodash';

const gameboardFactory = (ownerName) => {
  const boardInfo = {
    board: [],
    shipsLeft: true,
    owner: ownerName,
    lastShot: {
      hit: false,
      location: false,
    },
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
    //loop through board
    for (let square of boardInfo.board) {
      //check if square conntains ship
      if (square.ship !== false) {
        //if it does check if square been hit
        if (square.beenHit === false) {
          boardInfo.shipsLeft = true;
          return;
        }
      }
    }
    //all squares with a ship has been hit
    boardInfo.shipsLeft = false;
  };

  const receiveAttack = (coords) => {
    boardInfo.board[coords].beenHit = true;
    if (boardInfo.board[coords].ship !== false) {
      boardInfo.lastShot.hit = true;
      boardInfo.lastShot.location = coords;
    } else {
      boardInfo.lastShot.hit = false;
      boardInfo.lastShot.location = false;
    }
    allShipSunk();
  };

  const placeShip = (ship, startCoord) => {
    if (ship.isVertical) {
      for (let i = 0; i < ship.shipLength; i++) {
        boardInfo.board[startCoord + i * 10].ship = ship.id;
      }
    } else {
      for (let i = 0; i < ship.shipLength; i++) {
        boardInfo.board[startCoord + i].ship = ship.id;
      }
    }
  };

  return { boardInfo, receiveAttack, placeShip };
};

export default gameboardFactory;
