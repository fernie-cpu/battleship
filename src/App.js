import React, { useState } from 'react';
import GameContainer from './components/GameContainer';
import Controls from './components/Controls';
import Winner from './components/Winner';

const App = () => {
  const [restart, setRestart] = useState(false);
  const [isGame, setIsGame] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [winner, setWinner] = useState(false);

  return (
    <div className='App'>
      {winner ? (
        <Winner player={winner} />
      ) : (
        <h1 className='title'>Battleship</h1>
      )}
      {showControls ? (
        <Controls
          isGame={isGame}
          setIsGame={setIsGame}
          setRestart={setRestart}
          setWinner={setWinner}
        />
      ) : null}
      <GameContainer
        restart={restart}
        setRestart={setRestart}
        isGame={isGame}
        setIsGame={setIsGame}
        setShowControls={setShowControls}
        setWinner={setWinner}
      />
    </div>
  );
};

export default App;
