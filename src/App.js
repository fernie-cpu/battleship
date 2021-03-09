import React, { useState, useEffect } from 'react';
import Gameboard from './components/Gameboard';
import playerFactory from './factories/playerFactory';
import Winner from './components/Winner';
import _ from 'lodash';

const App = () => {
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const [player1turn, setPlayer1Turn] = useState(null);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    setPlayer1(playerFactory('player'));
    setPlayer2(playerFactory('computer'));
    setPlayer1Turn(false);
  }, []);

  const gameLoop = (checkWinner, curPlayer) => {
    if (checkWinner) {
      setPlayer1Turn(!player1turn);
    } else {
      curPlayer === 'computer' ? setWinner(player1) : setWinner(player2);
    }
  };

  return (
    <div className='App'>
      <h1>still no clue what you're doing, i see</h1>
      {winner ? <Winner player={winner} /> : <h1>let's see</h1>}
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

export default App;
