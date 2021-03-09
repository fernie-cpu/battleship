import React, { useState, useEffect } from 'react';
import Gameboard from './Gameboard';
import Winner from './Winner';
import playerFactory from '../factories/playerFactory';
import _ from 'lodash';

const GameContainer = () => {
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const [player1turn, setPlayer1Turn] = useState(null);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    setPlayer1(playerFactory('You'));
    setPlayer2(playerFactory('Computer'));
    setPlayer1Turn(false);
  }, []);

  const gameLoop = (checkWinner, curPlayer) => {
    if (checkWinner) {
      setPlayer1Turn(!player1turn);
    } else {
      curPlayer === 'Computer' ? setWinner(player1) : setWinner(player2);
    }
  };

  return (
    <div>
      {winner ? <Winner player={winner} /> : null}
      {_.isEmpty(player1) && _.isEmpty(player2) ? null : (
        <div className='app-gameboard-container'>
          <Gameboard
            player={player1}
            yourTurn={player1turn}
            gameLoop={gameLoop}
          />
          <Gameboard
            player={player2}
            yourTurn={!player1turn}
            gameLoop={gameLoop}
          />
        </div>
      )}
    </div>
  );
};

export default GameContainer;
