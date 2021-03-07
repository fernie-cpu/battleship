import React, { useState, useEffect } from 'react';
import gameboardFactory from '../factories/gameboardFactory';
import _ from 'lodash';

const Gameboard = () => {
  const [board, setBoard] = useState({});

  useEffect(() => {
    const gameboard = gameboardFactory();
    setBoard(gameboard);
  }, []);

  return (
    <div>
      <div className='gameboard-grid-container'>
        {_.isEmpty(board)
          ? null
          : board.boardInfo.board.map((square, index) => {
              return <div key={index} className='grid-square'></div>;
            })}
      </div>
    </div>
  );
};

export default Gameboard;
