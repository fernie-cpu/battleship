import React, { useState } from 'react';
import GameContainer from './components/GameContainer';
import Controls from './components/Controls';

const App = () => {
  const [restart, setRestart] = useState(false);
  const [isGame, setIsGame] = useState(false);
  const [showControls, setShowControls] = useState(false);

  return (
    <div className='App'>
      <h1>still no clue what you're doing, i see</h1>
      {showControls ? (
        <Controls
          isGame={isGame}
          setIsGame={setIsGame}
          setRestart={setRestart}
        />
      ) : null}
      <GameContainer
        restart={restart}
        setRestart={setRestart}
        isGame={isGame}
        setIsGame={setIsGame}
        setShowControls={setShowControls}
      />
    </div>
  );
};

export default App;
