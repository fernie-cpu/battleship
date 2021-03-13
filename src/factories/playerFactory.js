const playerFactory = (name) => {
  const playerInfo = {
    name: name,
    pastShots: [],
  };

  const getRandom = (num) => {
    return Math.floor(Math.random() * num);
  };

  const playRandomMove = () => {
    let ranMove = getRandom(100);
    while (playerInfo.pastShots.includes(ranMove)) {
      ranMove = getRandom(100);
    }
    playerInfo.pastShots.push(ranMove);
    return ranMove;
  };

  const resetPastShots = () => {
    playerInfo.pastShots.length = 0;
  };

  const AI = (lastShot) => {
    if (lastShot.hit) {
      const figureNext = (lastShot) => {
        let ranNum = getRandom(4);
        let nextMove;
        switch (ranNum) {
          case 0:
            nextMove = lastShot.location + 1;
            break;
          case 1:
            nextMove = lastShot.location - 1;
            break;
          case 2:
            nextMove = lastShot.location + 10;
            break;
          case 3:
            nextMove = lastShot.location - 10;
            break;
          default:
            console.log('nah');
        }
        return nextMove;
      };

      let nextMove = figureNext(lastShot);
      let timeout = 0;
      let whileTrue = true;

      while (
        playerInfo.pastShots.includes(nextMove) ||
        nextMove > 99 ||
        nextMove < 0
      ) {
        nextMove = figureNext(lastShot);
        timeout++;
        if (timeout === 50) {
          whileTrue = false;
          break;
        }
      }

      timeout = 0;
      if (!whileTrue) {
        return playRandomMove();
      } else {
        playerInfo.pastShots.push(nextMove);
        return nextMove;
      }
    } else {
      return playRandomMove();
    }
  };

  return {
    playerInfo,
    AI,
    resetPastShots,
  };
};

export default playerFactory;
