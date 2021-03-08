import React, { useState, useEffect } from 'react';
import gameboardFactory from '../factories/gameboardFactory';
import _ from 'lodash';

const Gameboard = ({ player }) => {
  const [board, setBoard] = useState({});

  useEffect(() => {
    const gameboard = gameboardFactory(player);
    setBoard(gameboard);
  }, [player]);

  return (
    <div>
      {_.isEmpty(board) ? null : (
        <div>
          {' '}
          <h3>{player.playerInfo.name}</h3>
          <div className='gameboard-grid-container'>
            {board.boardInfo.board.map((square, index) => {
              return (
                <div
                  key={index}
                  id={`${player}-${index}`}
                  className='grid-square'
                ></div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gameboard;
