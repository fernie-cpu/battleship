import Ship from './Ship';

let ship = Ship(5);

it('create ship', () => {
  expect(ship.length).toBe(5);
});

ship.hit(0);

ship.hit(4);

it('ship hit again', () => {
  expect(ship.hitLocation).toBe(['x', undefined, undefined, undefined, 'x']);
});
