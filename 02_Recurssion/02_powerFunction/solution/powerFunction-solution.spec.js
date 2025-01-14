const powerFunction = require('./powerFunction-solution');

describe('powerFunction', () => {
  test('powerFunction(2,4) = 16', () => {
    expect(powerFunction(2,4)).toBe(16);
  });
  
  test('powerFunction(2,4) = 8', () => {
    expect(powerFunction(2,3)).toBe(8);
  });

  test('powerFunction(2,4) = 4', () => {
    expect(powerFunction(2,2)).toBe(4);
  });
  
  test('powerFunction(2,4) = 2', () => {
    expect(powerFunction(2,1)).toBe(2);
  });

  test('powerFunction(2,4) = 1', () => {
    expect(powerFunction(2,0)).toBe(1);
  });
});
