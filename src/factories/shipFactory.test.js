import shipFactory from './shipFactory';

let ship = shipFactory(5);

it('create ship', () => {
  expect(ship.length).toBe(5);
});
