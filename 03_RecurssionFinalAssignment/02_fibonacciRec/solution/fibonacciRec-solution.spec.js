const fibonacciRec = require('./fibonacciRec-solution');

describe('recursive fibonacci', () => {
  test('8 from fibonacci sequence', () => {

    expect(fibonacciRec(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test('1 from fibonacci sequence', () => {

    expect(fibonacciRec(1)).toStrictEqual([0]);
  });

  test('0 from fibonacci sequence', () => {

    expect(fibonacciRec(0)).toStrictEqual([]);
  });
});
