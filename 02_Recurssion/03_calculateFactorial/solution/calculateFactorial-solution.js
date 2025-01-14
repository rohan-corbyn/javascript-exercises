const calculateFactorial = function(f) {
  if (f == 1) return 1;
  return f * calculateFactorial(f-1);
};
  
// Do not edit below this line
module.exports = calculateFactorial;
