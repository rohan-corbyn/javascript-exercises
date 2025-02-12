const LinkedList = require('./linkedList-solution');

describe('linkedList', () => {
  
  test('create empty linkedList', () => {
    const newList = new LinkedList();
    expect(newList.toString()).toBe("null");
    expect(newList.head()).toBe(undefined);
  });

  test('append to list', () => {
    const newList = new LinkedList();
    newList.append("one");
    newList.append("two");
    newList.append("three");
    expect(newList.head().value).toBe("one");
    expect(newList.tail().value).toBe("three");
  });

  test('prepend to list', () => {
    const newList = new LinkedList();
    newList.prepend("one");
    newList.prepend("two");
    newList.prepend("three");
    expect(newList.head().value).toBe("three");
    expect(newList.tail().value).toBe("one");
  });

  test('size of list', () => {
    const newList = new LinkedList();
    expect(newList.size()).toBe(0);
    newList.prepend("one");
    expect(newList.size()).toBe(1);
    newList.prepend("two");
    expect(newList.size()).toBe(2);
    newList.prepend("three");
    expect(newList.size()).toBe(3);
  });

  test('head of list', () => {
    const newList = new LinkedList();
    expect(newList.head()).toBe(undefined);
    newList.append("one");
    newList.prepend("two");
    expect(newList.head().value).toBe("two");
  });

  test('tail of list', () => {
    const newList = new LinkedList();
    expect(newList.tail()).toBe(undefined);
    newList.append("one");
    newList.prepend("two");
    newList.append("three");
    expect(newList.tail().value).toBe("three");
  });

  test('atIndex', () => {
    const newList = new LinkedList();
    expect(newList.atIndex(0)).toBe(undefined);
    expect(newList.atIndex(4)).toBe(undefined);
    newList.append("one");
    newList.append("two");
    newList.append("three");
    expect(newList.atIndex(0).value).toBe("one");
    expect(newList.atIndex(1).value).toBe("two");
    expect(newList.atIndex(2).value).toBe("three");
  });

  test('pop', () => {
    const newList = new LinkedList();
    newList.pop();
    newList.append("one");
    newList.append("two");
    newList.append("three");
    expect(newList.tail().value).toBe("three");
    newList.pop();
    expect(newList.tail().value).toBe("two");
    newList.pop();
    expect(newList.tail().value).toBe("one");
  });

  test('contains', () => {
    const newList = new LinkedList();
    newList.append("one");
    newList.append("two");
    expect(newList.contains("one")).toBe(true);
    expect(newList.contains("two")).toBe(true);
    expect(newList.contains("three")).toBe(false);
  });

  test('find', () => {
    const newList = new LinkedList();
    expect(newList.find("one")).toBe(-1);
    newList.append("one");
    newList.append("two");
    newList.append("three");
    newList.append("two");
    expect(newList.find("one")).toBe(0);
    expect(newList.find("two")).toBe(1);
    expect(newList.find("three")).toBe(2);
    expect(newList.find("four")).toBe(-1);
  });

  test('toString', () => {
    const newList = new LinkedList();
    expect(newList.toString()).toBe("null");
    newList.append("one");
    newList.append("two");
    newList.prepend("three");
    expect(newList.toString()).toBe("( three ) => ( one ) => ( two ) => null");
  });

  test('insertAt', () => {
    const newList = new LinkedList();
    newList.insertAt("one", 0);
    newList.insertAt("two", 1);
    newList.insertAt("three", 2);
    newList.insertAt("0.5", 0)
    newList.insertAt("1.5", 2)
    newList.insertAt("2.5", 4)
    console.log(newList.toString())
    expect(newList.atIndex(0).value).toBe("0.5");
    expect(newList.atIndex(2).value).toBe("1.5");
    expect(newList.atIndex(4).value).toBe("2.5");
  });

  test('removeAt', () => {
    const newList = new LinkedList();
    newList.insertAt("one", 0);
    newList.insertAt("two", 1);
    newList.insertAt("three", 2);
    newList.insertAt("0.5", 0)
    newList.insertAt("1.5", 2)
    newList.insertAt("2.5", 4)
    newList.removeAt(0);
    newList.removeAt(1);
    newList.removeAt(2);
    expect(newList.atIndex(0).value).toBe("one");
    expect(newList.atIndex(1).value).toBe("two");
    expect(newList.atIndex(2).value).toBe("three");
  });
});
