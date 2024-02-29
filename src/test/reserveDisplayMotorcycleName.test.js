import reserveDisplayName from '../reserveDisplay';

describe('should display the reserved motorcycle name ', () => {
  test('should display the motorcyle name', () => {
    const motorcleArray = [{ id: 1, name: 'Vespa' }];
    const reservedMotorcycleId = 1;
    const motorcycleName = reserveDisplayName(reservedMotorcycleId, motorcleArray);
    expect(motorcycleName).toMatch('Vespa');
  });
});
