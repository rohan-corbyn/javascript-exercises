const sumRange = function(range) {
  if (range === 1) return 1
  return  range + sumRange(range-1);
};
  
// Do not edit below this line
module.exports = sumRange;
