const productOfAnArray = require('./productOfAnArray-solution');

describe('productOfAnArray', () => {
  test('productOfArray([1,2,3]) = 6', () => {
    expect(productOfAnArray([1, 2, 3])).toBe(6);
  });

  test('productOfArray([1,2,3,10]) = 60', () => {
    expect(productOfAnArray([1, 2, 3, 10])).toBe(60);
  });
});
