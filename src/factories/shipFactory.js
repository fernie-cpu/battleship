const shipFactory = (id, shipLength, isVertical) => {
  // const hitLocations = Array(shipLength);

  // const hit = (position) => {
  //   hitLocations[position] = 'x';
  // };

  // const isSunk = () => {
  //   for (let i = 0; i < hitLocations.length; i++) {
  //     if (hitLocations[i] !== 'x') {
  //       return false;
  //     }
  //   }
  //   return true;
  // };

  return { id, isVertical, shipLength };
};

export default shipFactory;
