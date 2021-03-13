import shipFactory from './shipFactory';

let ship = shipFactory(1, 5, false);

it('create ship', () => {
  expect(ship.shipLength).toBe(5);
});
