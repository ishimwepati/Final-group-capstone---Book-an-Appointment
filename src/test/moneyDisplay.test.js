import { moneyDisplay } from '../timeCalc';

test('Expect to return a money format', () => {
  const totalToPay = 20;
  expect(moneyDisplay(totalToPay)).toMatch('$20.00');
});
