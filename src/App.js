import React, { useState, useEffect } from 'react';
import Gameboard from './components/Gameboard';
import playerFactory from './factories/playerFactory';
import _ from 'lodash';

const App = () => {
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const [player1turn, setPlayer1Turn] = useState(true);

  useEffect(() => {
    setPlayer1(playerFactory('player'));
    setPlayer2(playerFactory('computer'));
  }, []);

  return (
    <div className='App'>
      <h1>still no clue what you're doing, i see</h1>
      {_.isEmpty(player1) && _.isEmpty(player2) ? null : (
        <div className='app-gameboard-container'>
          <Gameboard player={player1} />
          <Gameboard player={player2} />
        </div>
      )}
    </div>
  );
};

export default App;
