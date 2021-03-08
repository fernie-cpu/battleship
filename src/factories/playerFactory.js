const playerFactory = (name) => {
  const playerInfo = {
    name: name,
    pastShots: [],
  };

  const AI = () => {
    const getRandom = () => {
      return Math.floor(Math.random() * 100);
    };
    let randomMove = getRandom();

    while (playerInfo.pastShots.includes(randomMove)) {
      randomMove = getRandom();
    }

    playerInfo.pastShots.push(randomMove);
    return randomMove;
  };

  return {
    playerInfo,
    AI,
  };
};

export default playerFactory;
