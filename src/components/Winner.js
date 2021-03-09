import React from 'react';

const Winner = ({ player }) => {
  return (
    <div className='winner'>
      <h1>{player.playerInfo.name} Wins!</h1>
    </div>
  );
};

export default Winner;
