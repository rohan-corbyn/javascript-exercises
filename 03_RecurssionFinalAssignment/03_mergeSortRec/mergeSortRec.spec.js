const mergeSortRec = require('./mergeSortRec');

describe('mergeSortRec', () => {
  test('[3, 2, 1, 13, 8, 5, 0, 1] => [0, 1, 1, 2, 3, 5, 8, 13]', () => {

    expect(mergeSortRec([3, 2, 1, 13, 8, 5, 0, 1])).toStrictlyEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test.skip('[105, 79, 100, 110] => [79, 100, 105, 110]', () => {

    expect(mergeSortRec([105, 79, 100, 110])).toStrictlyEqual([79, 100, 105, 110]);
  });

  test.skip('[105] => [105]', () => {

    expect(mergeSortRec([105, 79, 100, 110])).toStrictlyEqual([79, 100, 105, 110]);
  });

  test.skip('[] => [0]', () => {

    expect(mergeSortRec([105, 79, 100, 110])).toStrictlyEqual([79, 100, 105, 110]);
  });
});
