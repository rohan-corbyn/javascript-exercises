const powerFunction = function (b, n) {
  // Question 2: https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion
  // Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
  if (n == 0) return 1;
  else return b * powerFunction(b, n - 1);
};

// Do not edit below this line
module.exports = powerFunction;
