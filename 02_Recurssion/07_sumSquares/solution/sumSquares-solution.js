const sumSquares = function (array) {

  if (Array.isArray(array)) {

    return array.reduce((acc, element) => {
      return acc + sumSquares(element);
    }, 0)
  }

  if (Number.isInteger(array)) {
    return array * array;
  }

  return 0;
};

// Do not edit below this line
module.exports = sumSquares;
