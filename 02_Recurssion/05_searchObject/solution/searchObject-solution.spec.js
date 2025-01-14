const searchObject = require('./searchObject-solution');

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2'
          }
        }
      }
    }
  }
}

describe('searchObject', () => {
  test('Value is found', () => {
    expect(searchObject(nestedObject, 44)).toBe(true);

  });

  test('Value is missing', () => {
    expect(searchObject(nestedObject, "foo")).toBe(false);
  });
});
