const replicate = require('./replicate-solution');

describe('replicate', () => {
  test('replicate(3, 5) // [5, 5, 5]', () => {
    expect(replicate(3, 5)).toEqual([5, 5, 5]);
  });
  
  test('replicate(1, 69) // [69]', () => {
    expect(replicate(1, 69)).toEqual([69]);
  });

  test('replicate(-2, 6)) // []', () => {
    expect(replicate(-2, 6)).toEqual([]);
  });
});
