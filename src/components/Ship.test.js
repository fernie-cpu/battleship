import Ship from './Ship';

let ship = Ship(5);

it('create ship', () => {
  expect(ship.length).toBe(5);
});
