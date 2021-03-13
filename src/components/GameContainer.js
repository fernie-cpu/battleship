import React, { useState, useEffect } from 'react';
import Gameboard from './Gameboard';
import playerFactory from '../factories/playerFactory';
import PlayerForm from './PlayerForm';

const GameContainer = ({
  restart,
  setRestart,
  isGame,
  setIsGame,
  setShowControls,
  setWinner,
}) => {
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const [player1turn, setPlayer1Turn] = useState(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    // setPlayer1(playerFactory('You'));
    setPlayer2(playerFactory('Computer'));
    setPlayer1Turn(false);
    if (start) {
      setShowControls(true);
    }
  }, [start, setIsGame, setShowControls]);

  const gameLoop = (checkWinner, curPlayer) => {
    if (checkWinner) {
      setPlayer1Turn(!player1turn);
    } else {
      curPlayer === 'Computer' ? setWinner(player1) : setWinner(player2);
    }
  };

  return (
    <div>
      {!start ? (
        <PlayerForm setStart={setStart} setPlayer1={setPlayer1} />
      ) : (
        <div className='app-gameboard-container'>
          <Gameboard
            player={player1}
            yourTurn={player1turn}
            gameLoop={gameLoop}
            start={start}
            restart={restart}
            setRestart={setRestart}
            isGame={isGame}
            setIsGame={setIsGame}
          />
          <Gameboard
            player={player2}
            yourTurn={!player1turn}
            gameLoop={gameLoop}
            start={start}
            restart={restart}
            setRestart={setRestart}
            isGame={isGame}
            setIsGame={setIsGame}
          />
        </div>
      )}
    </div>
  );
};

export default GameContainer;
