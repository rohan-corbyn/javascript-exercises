//Given a multi-dimensional integer array, return the total number of integers stored inside this array

const parseAMultidimensionalArray = function (array) {

  if (Array.isArray(array)) {

    return array.reduce((acc, element) => {
      return acc + parseAMultidimensionalArray(element);
    }, 0);
  }

  if (Number.isInteger(array)) {

    return 1;
  }
  
  return 0;
};



module.exports = parseAMultidimensionalArray;
