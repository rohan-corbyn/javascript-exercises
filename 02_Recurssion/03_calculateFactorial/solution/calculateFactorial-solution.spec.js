const calculateFactorial = require('./calculateFactorial-solution');

describe('calculateFactorial', () => {
  test('factorial(5); // 5 * 4 * 3 * 2 * 1 === 120', () => {
    expect(calculateFactorial(5)).toBe(120);
  });
  
  test('factorial(4); // 4 * 3 * 2 * 1 === 24', () => {
    expect(calculateFactorial(4)).toBe(24);
  });
});
