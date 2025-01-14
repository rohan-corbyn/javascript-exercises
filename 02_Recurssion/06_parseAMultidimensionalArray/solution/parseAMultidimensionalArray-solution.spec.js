const parseAMultidimensionalArray = require('./parseAMultidimensionalArray-solution');

//Given a multi-dimensional integer array, return the total number of integers stored inside this array
describe('parseAMultidimensionalArray', () => {
  test('Seven integers stored in Array', () => {
    var seven = parseAMultidimensionalArray([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
    expect(seven).toBe(7);
  });
  
  test('Zero integers stored in Array', () => {
    var zero = parseAMultidimensionalArray([[[]], ['foo'], [], [[]]]); // 0
    expect(parseAMultidimensionalArray()).toBe(0);
  });
});
