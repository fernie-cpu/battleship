import playerFactory from './playerFactory';

const player = playerFactory('player 1');

it('AI move in play < 0', () => {
  expect(player.AI({ hit: true, location: 0 })).toBeGreaterThan(0);
});

it('AI next move < 99', () => {
  expect(player.AI({ hit: true, location: 99 })).toBeGreaterThan(99);
});
