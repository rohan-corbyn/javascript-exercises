const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, currentItem) => total + currentItem, 0);
};

const multiply = function(array) {
  return array.reduce((total, currentItem) => total  * currentItem);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  let factorial = a;
  if (a === 0) {
    factorial = 1;
  } else {    
    for (let i = a - 1; i > 0; i --) {
      factorial = factorial * i;
    }
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
