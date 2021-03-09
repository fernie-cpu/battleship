const shipFactory = (id, length, isVertical) => {
  const hitLocations = Array(length);

  const hit = (position) => {
    hitLocations[position] = 'x';
  };

  const isSunk = () => {
    for (let i = 0; i < hitLocations.length; i++) {
      if (hitLocations[i] !== 'x') {
        return false;
      }
    }
    return true;
  };

  return { id, isVertical, length, hit, hitLocations, isSunk };
};

export default shipFactory;
