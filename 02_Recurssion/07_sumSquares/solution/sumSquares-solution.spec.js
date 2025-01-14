const sumSquares = require('./sumSquares-solution');

describe('sumSquares', () => {
  test('SumSquares([1,2,3]) // 1 + 4 + 9 = 14', () => {
    expect(sumSquares([1,2,3])).toBe(14);
  });
  
  test('SumSquares([[1,2],3]) // 1 + 4 + 9 = 14', () => {
    expect(sumSquares([[1,2],3])).toBe(14);
  });

  test('SumSquares([[[[[[[[[1]]]]]]]]]) // 1 = 1', () => {
    expect(sumSquares([[[[[[[[[1]]]]]]]]])).toBe(1);
  });

  test('SumSquares([10,[[10],10],[10]]) // 100 + 100 + 100 + 100 = 400', () => {
    expect(sumSquares([10,[[10],10],[10]])).toBe(400);
  });
});
