import React, { useState, useEffect } from 'react';
import gameboardFactory from '../factories/gameboardFactory';
import shipFactory from '../factories/shipFactory';
import _ from 'lodash';

const Gameboard = ({ player }) => {
  const [board, setBoard] = useState({});

  useEffect(() => {
    const ships = [];
    for (let i = 1; i < 6; i++) {
      ships.push(shipFactory(i, i, false));
    }

    const gameboard = gameboardFactory(player);
    const alreadyPlaced = [];
    for (let j = 0; j < ships.length; j++) {
      const getRandom = () => {
        return Math.floor(Math.random() * 100);
      };
      let startCoord = getRandom();
      while (alreadyPlaced.includes(startCoord)) {
        startCoord = getRandom();
      }
      alreadyPlaced.push(startCoord);
      gameboard.placeShip(ships[j], startCoord);
    }

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
                  id={`${player.playerInfo.name}-${index}`}
                  className={`${
                    square.ship !== false ? 'ship' : ''
                  } grid-square`}
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
