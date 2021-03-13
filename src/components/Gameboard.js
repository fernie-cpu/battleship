import React, { useState, useEffect, useCallback } from 'react';
import gameboardFactory from '../factories/gameboardFactory';
import shipFactory from '../factories/shipFactory';
import _ from 'lodash';

const Gameboard = ({
  player,
  yourTurn,
  gameLoop,
  start,
  restart,
  setRestart,
  isGame,
  setIsGame,
}) => {
  const [board, setBoard] = useState({});

  const generateShipsOnBoard = useCallback(() => {
    const ships = [];
    for (let i = 1; i < 6; i++) {
      let y = Math.round(Math.random() * 10 + 1) > 5;
      ships.push(shipFactory(i, i, y));
    }

    //init the gameboard
    const gameboard = gameboardFactory(player);
    // create array that keeps track of squares already placed
    const alreadyPlaced = [];
    //loop through array of generated ships
    for (let j = 0; j < ships.length; j++) {
      let ship = ships[j];
      const getRandom = () => {
        return Math.floor(Math.random() * 100);
      };
      let startCoord = getRandom();
      while (alreadyPlaced.includes(startCoord)) {
        //square that will be placed if ship is placed at current starting coord
        let willBePlaced = [];
        if (ship.isVertical) {
          for (let i = 0; ship.shipLength; i++) {
            willBePlaced.push(startCoord + i * 10);
          }
        } else {
          for (let i = 0; ship.shipLength; i++) {
            willBePlaced.push(startCoord + i);
          }
        }
        //checks to make sure placement will be valid
        while (
          alreadyPlaced.some((item) => willBePlaced.includes(item)) ||
          (willBePlaced.includes(9) && willBePlaced.includes(10)) ||
          (willBePlaced.includes(19) && willBePlaced.includes(20)) ||
          (willBePlaced.includes(29) && willBePlaced.includes(30)) ||
          (willBePlaced.includes(39) && willBePlaced.includes(40)) ||
          (willBePlaced.includes(49) && willBePlaced.includes(50)) ||
          (willBePlaced.includes(59) && willBePlaced.includes(60)) ||
          (willBePlaced.includes(69) && willBePlaced.includes(70)) ||
          (willBePlaced.includes(79) && willBePlaced.includes(80)) ||
          (willBePlaced.includes(89) && willBePlaced.includes(90)) ||
          willBePlaced.some((item) => item > 99)
        ) {
          willBePlaced.length = 0;
          startCoord = getRandom();
          if (ship.isVertical) {
            for (let i = 0; i < ship.shipLength; i++) {
              willBePlaced.push(startCoord + i * 10);
            }
          } else {
            for (let i = 0; i < ship.shipLength; i++) {
              willBePlaced.push(startCoord + i);
            }
          }
        }
        alreadyPlaced.push(...willBePlaced);
        gameboard.placeShip(ships, startCoord);
        willBePlaced.length = 0;
      }
    }

    setBoard(gameboard);
  }, [player]);

  useEffect(() => {
    if (start) {
      generateShipsOnBoard();
    }
  }, [start, generateShipsOnBoard]);

  useEffect(() => {
    if (restart) {
      setBoard({});
      generateShipsOnBoard();
      setRestart(false);
    }
  }, [restart, setRestart, generateShipsOnBoard]);

  useEffect(() => {
    if (!_.isEmpty(board)) {
      if (board.boardInfo.owner.playerInfo.name !== 'Computer' && yourTurn) {
        setTimeout(() => {
          board.receiveAttack(
            board.boardInfo.owner.AI(board.boardInfo.lastShot)
          );
          gameLoop(
            board.boardInfo.shipsLeft,
            board.boardInfo.owner.playerInfo.name
          );
        }, 500);
      }
    }
  }, [yourTurn, board, gameLoop]);

  const handleClick = (e) => {
    if (!isGame) {
      setIsGame(true);
    }
    let targetCoord = e.target.id.split('-')[1];
    if (!board.boardInfo.board[targetCoord].beenHit) {
      board.receiveAttack(targetCoord);
      gameLoop(
        board.boardInfo.shipsLeft,
        board.boardInfo.owner.playerInfo.name
      );
    }
  };

  return (
    <div>
      {_.isEmpty(board) ? null : (
        <div className={`${yourTurn ? '' : 'hide'}`}>
          {' '}
          <h3>{player.playerInfo.name}'s Board</h3>
          <div className={'gameboard-grid-container'}>
            {board.boardInfo.board.map((square, index) => {
              return (
                <div
                  onClick={(e) => {
                    if (yourTurn) {
                      handleClick(e);
                    }
                  }}
                  key={index}
                  id={`${player.playerInfo.name}-${index}`}
                  className={`${
                    square.ship !== false &&
                    player.playerInfo.name === 'Computer'
                      ? 'ship'
                      : ''
                  } ${square.beenHit && square.ship ? 'hit' : ''} ${
                    player.playerInfo.name === 'Computer' ? 'square-hover' : ''
                  } 
                  grid-square`}
                >
                  {square.beenHit ? 'X' : ''}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gameboard;
