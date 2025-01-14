const replicate = function (occurances, value) {
  if (occurances <= 0) return [];
  return [value].concat(replicate(occurances - 1, value));
};

// Do not edit below this line
module.exports = replicate;
