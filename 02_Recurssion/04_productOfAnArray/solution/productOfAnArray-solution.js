const productOfAnArray = function (array) {
  if (array.length === 0) return 1;
  return array[array.length - 1] * productOfAnArray(array.slice(0, -1));
};

// Do not edit below this line
module.exports = productOfAnArray;
