import React, { useState } from 'react';
import playerFactory from '../factories/playerFactory';

const PlayerForm = ({ setPlayer1, setStart }) => {
  const [p1, setP1] = useState('');

  const handleChange = (e) => {
    setP1(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (p1 === '') {
      setPlayer1(playerFactory('Player 1'));
    } else {
      setPlayer1(playerFactory(p1));
    }
    setStart(true);
  };

  return (
    <div className='divForm'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter your name'
          name='p1'
          value={p1}
          onChange={handleChange}
        />
        <button>Play</button>
      </form>
    </div>
  );
};

export default PlayerForm;
