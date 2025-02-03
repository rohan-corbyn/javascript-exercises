// FACTORY SOLUTION

// function LinkedList() {

//   let firstNode = undefined;

//   const tail = () => {
//     let thisNode = firstNode;
//     while (thisNode && thisNode.nextNode) {
//       thisNode = thisNode.nextNode;
//     }
//     return thisNode;
//   }

//   return {

//     append: (value) => {
//       const newNode = Node(value);
//       const lastNode = tail();
//       if (lastNode) {
//         lastNode.nextNode = newNode;
//       } else {
//         firstNode = newNode;
//       }
//     },

//     prepend: (value) => {
//       const newNode = Node(value);
//       newNode.nextNode = firstNode
//       firstNode = newNode;
//     },

//     toString: () => {
//       let thisNode = firstNode;
//       let string = "";
//       while (thisNode) {
//         string += "( " + thisNode.value + " )";
//         string += " => ";
//         thisNode = thisNode.nextNode;
//       }
//       string += "null";
//       return string;
//     },

//     size: () => {
//       let thisNode = firstNode;
//       let count = 0;
//       while (thisNode) {
//         count++;
//         thisNode = thisNode.nextNode;
//       }
//       return count;
//     },

//     head: () => {
//       return firstNode;
//     },

//     tail: tail,

//     atIndex: (index) => {
//       let i = 0;
//       let thisNode = firstNode;
//       while (thisNode && i != index) {
//         thisNode = thisNode.nextNode;
//         i++;
//       }
//       return thisNode;
//     },

//     pop: () => {
//       let thisNode = firstNode;
//       if (firstNode) {
//         while (thisNode.nextNode && thisNode.nextNode.nextNode) {
//           thisNode = thisNode.nextNode;
//         }
//         thisNode.nextNode = null;
//       }
//     },

//     contains: (value) => {
//       let thisNode = firstNode;
//       while (thisNode) {
//         if (thisNode.value === value) {
//           return true;
//         }
//         thisNode = thisNode.nextNode;
//       }
//       return false;
//     },

//     find: (value) => {
//       let thisNode = firstNode;
//       let i = 0;
//       while (thisNode) {
//         if (thisNode.value === value) {
//           return i;
//         }
//         thisNode = thisNode.nextNode;
//         i++;
//       }
//       return -1;
//     }
//   }
// }

// function Node(value) {

//   return {
//     value: value,
//     nextNode: undefined
//   }
// }

// module.exports = LinkedList;

// CLASS SOLUTION

class LinkedList {

  constructor() {
    this.firstNode = undefined;
  }

  tail() {
    let thisNode = this.firstNode;
    while (thisNode && thisNode.nextNode) {
      thisNode = thisNode.nextNode;
    }
    return thisNode;
  }

  append(value) {
    const newNode = new Node(value);
    const lastNode = this.tail();
    if (lastNode) {
      lastNode.nextNode = newNode;
    } else {
      this.firstNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.firstNode
    this.firstNode = newNode;
  }

  toString() {
    let thisNode = this.firstNode;
    let string = "";
    while (thisNode) {
      string += "( " + thisNode.value + " )";
      string += " => ";
      thisNode = thisNode.nextNode;
    }
    string += "null";
    return string;
  }

  size() {
    let thisNode = this.firstNode;
    let count = 0;
    while (thisNode) {
      count++;
      thisNode = thisNode.nextNode;
    }
    return count;
  }

  head() {
    return this.firstNode;
  }

  atIndex(index) {
    let i = 0;
    let thisNode = this.firstNode;
    while (thisNode && i != index) {
      thisNode = thisNode.nextNode;
      i++;
    }
    return thisNode;
  }

  pop() {
    let thisNode = this.firstNode;
    if (this.firstNode) {
      while (thisNode.nextNode && thisNode.nextNode.nextNode) {
        thisNode = thisNode.nextNode;
      }
      thisNode.nextNode = null;
    }
  }

  contains(value) {
    let thisNode = this.firstNode;
    while (thisNode) {
      if (thisNode.value === value) {
        return true;
      }
      thisNode = thisNode.nextNode;
    }
    return false;
  }

  find(value) {
    let thisNode = this.firstNode;
    let i = 0;
    while (thisNode) {
      if (thisNode.value === value) {
        return i;
      }
      thisNode = thisNode.nextNode;
      i++;
    }
    return -1;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = undefined;
  }
}

module.exports = LinkedList;
