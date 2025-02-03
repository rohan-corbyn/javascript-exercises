const fibonacci = require('./fibonacci-solution');
describe('fibonacci', () => {
  test('8 from fibonacci sequence', () => {

    expect(fibonacci(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test('1 from fibonacci sequence', () => {

    expect(fibonacci(1)).toStrictEqual([0]);
  });

  test('0 from fibonacci sequence', () => {

    expect(fibonacci(0)).toStrictEqual([]);
  });
});
