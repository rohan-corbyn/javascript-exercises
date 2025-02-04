const HashMap = require('./hashMap-solution');

describe('hashMap', () => {

  test('Hashmap set and overwrite', () => {
    const test = new HashMap();
    expect(test.get('apple')).toBe(null);
    test.set('apple', 'red');
    expect(test.get('apple')).toBe('red');
    test.set('apple', 'green');
    expect(test.get('apple')).toBe('green');
  });

  test('Hashmap expands once', () => {
    const test = new HashMap();
    expect(test.capacity).toBe(4);
    expect(test.length()).toBe(0);
    test.set('apple', 'red');
    test.set('banana', 'yellow');
    test.set('carrot', 'orange');
    test.set('dog', 'brown');
    expect(test.capacity).toBe(8);
    expect(test.length()).toBe(4);
  });

  test('Hashmap expands twice', () => {
    const test = new HashMap();
    expect(test.capacity).toBe(4);
    expect(test.length()).toBe(0);
    test.set('apple', 'red');
    test.set('banana', 'yellow');
    test.set('carrot', 'orange');
    test.set('dog', 'brown');
    expect(test.capacity).toBe(8);
    expect(test.length()).toBe(4);
    test.set('elephant', 'gray');
    test.set('frog', 'green');
    test.set('grape', 'purple');
    expect(test.capacity).toBe(16);
    expect(test.length()).toBe(7);
  });

  test('Hashmap expands three times', () => {
    const test = new HashMap();
    expect(test.capacity).toBe(4);
    expect(test.length()).toBe(0);
    test.set('apple', 'red');
    test.set('banana', 'yellow');
    test.set('carrot', 'orange');
    test.set('dog', 'brown');
    expect(test.capacity).toBe(8);
    expect(test.length()).toBe(4);
    test.set('elephant', 'gray');
    test.set('frog', 'green');
    test.set('grape', 'purple');
    expect(test.capacity).toBe(16);
    expect(test.length()).toBe(7);
    test.set('hat', 'black');
    test.set('ice cream', 'white');
    test.set('jacket', 'blue');
    test.set('kite', 'pink');
    test.set('lion', 'golden');
    test.set('apple', 'green');
    expect(test.capacity).toBe(32);
    expect(test.length()).toBe(12);
  });

  test('Hashmap has, remove, has not', () => {
    const test = new HashMap();
    test.set('apple', 'red');
    test.set('banana', 'yellow');
    test.set('carrot', 'orange');
    expect(test.has('apple')).toBe(true);
    test.remove('apple');
    expect(test.has('apple')).toBe(false);
    test.remove('apple');
    expect(test.has('apple')).toBe(false);
    expect(test.has('sun')).toBe(false);
    test.remove('sun');
    expect(test.has('sun')).toBe(false);
    expect(test.length()).toBe(2);
  });

  test('Hashmap get', () => {
    const test = new HashMap();
    test.set('apple', 'red');
    test.set('banana', 'yellow');
    test.set('carrot', 'orange');
    expect(test.get('apple')).toBe('red');
    test.set('apple', 'green');
    expect(test.get('apple')).toBe('green');
    expect(test.get('pear')).toBe(null);
  });

  test('Hashmap clear', () => {
    const test = new HashMap();
    test.set('apple', 'red');
    test.set('banana', 'yellow');
    test.set('carrot', 'orange');
    expect(test.get('apple')).toBe('red');
    expect(test.length()).toBe(3);
    test.clear();
    expect(test.get('apple')).toBe(null);
    expect(test.length()).toBe(0);
  });
});
