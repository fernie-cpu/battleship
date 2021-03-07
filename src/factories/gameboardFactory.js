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
};
