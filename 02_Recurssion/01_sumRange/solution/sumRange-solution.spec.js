const sumRange = require('./sumRange-solution');

describe('sumRange', () => {
  test('Sum range up to 3 = 6', () => {
    expect(sumRange(3)).toBe(6);
  });
  
  test('Sum range up to 2 = 3', () => {
    expect(sumRange(2)).toBe(3);
  });
});
