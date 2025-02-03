class LinkedList {
  constructor() {
    this.firstNode = undefined;
  }

  tail() {
    let current = this.firstNode;
    while (current?.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  append(value) {
    const newNode = new Node(value);
    this.firstNode ? this.tail().nextNode = newNode : this.firstNode = newNode;
  }

  prepend(value) {
    this.firstNode = new Node(value, this.firstNode);
  }

  size() {
    let current = this.firstNode, count = 0;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.firstNode;
  }

  atIndex(index) {
    let current = this.firstNode, i = 0;
    while (current && i++ < index) current = current.nextNode;
    return current;
  }

  pop() {
    if (!this.firstNode) return;
    if (!this.firstNode.nextNode) return this.firstNode = null;
    let current = this.firstNode;
    while (current.nextNode?.nextNode) current = current.nextNode;
    current.nextNode = null;
  }

  contains(value) {
    let current = this.firstNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.firstNode, i = 0;
    while (current) {
      if (current.value === value) return i;
      current = current.nextNode;
      i++;
    }
    return -1;
  }

  toString() {
    let current = this.firstNode, string = "";
    while (current) {
      string += `( ${current.value} ) => `;
      current = current.nextNode;
    }
    return string + "null";
  }

  insertAt(value, index) {
    let newNode = new Node(value);
    let current = this.firstNode;
    let prevNode = null;
    let i = 0;

    while (current && i++ < index) {
      prevNode = current;
      current = current.nextNode;
    }
    newNode.nextNode = current;

    if (prevNode) {
      prevNode.nextNode = newNode;
    } else {
      this.firstNode = newNode;
    }
  }


  removeAt(index) {
    if (index < 0 || !this.firstNode) return null;

    let current = this.firstNode, prevNode = null, i = 0;

    while (current && i++ < index) {
      prevNode = current;
      current = current.nextNode;
    }

    if (!current) return null;

    if (prevNode) {
      prevNode.nextNode = current.nextNode;
    } else {
      this.firstNode = current.nextNode;
    }
  }
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

module.exports = LinkedList;
