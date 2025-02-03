const mergeSortRec = require('./mergeSortRec-solution');

describe('mergeSortRec', () => {

  test('[] => []', () => {

    expect(mergeSortRec([])).toStrictEqual([]);
  });

  test('[105] => [105]', () => {

    expect(mergeSortRec([105])).toStrictEqual([105]);
  });

  test('[105, 104] => [104, 105]', () => {

    expect(mergeSortRec([105, 104])).toStrictEqual([104, 105]);
  });

  test('[3, 2, 1, 13, 8, 5, 0, 1] => [0, 1, 1, 2, 3, 5, 8, 13]', () => {

    expect(mergeSortRec([3, 2, 1, 13, 8, 5, 0, 1])).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test('[105, 79, 100, 110] => [79, 100, 105, 110]', () => {

    expect(mergeSortRec([105, 79, 100, 110])).toStrictEqual([79, 100, 105, 110]);
  });
});
