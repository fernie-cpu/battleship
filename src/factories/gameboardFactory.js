import _ from 'lodash';

const gameboardFactory = (coords) => {
  const boardInfo = {
    board: [],
    shipsLeft: true,
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
};
