import gameboardFactory from './gameboardFactory';

const board = gameboardFactory();
board.placeShip(1, 0, 5, false);

board.receiveAttack(0);
board.receiveAttack(1);
board.receiveAttack(2);
board.receiveAttack(3);
board.receiveAttack(4);

it('hits work', () => {
  expect(board.boardInfo.shipsLeft).toBe(false);
});
