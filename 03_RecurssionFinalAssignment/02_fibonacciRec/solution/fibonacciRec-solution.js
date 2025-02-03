const fibonacciRec = function (n) {

  if (n <= 0) return []
  if (n === 1) return [0]
  if (n === 2) return [0, 1]
  let sequence = fibonacciRec(n - 1);
  let nextNumber = sequence[sequence.length-1] + sequence[sequence.length-2];
  sequence.push(nextNumber);
  return sequence;
  
};

// Do not edit below this line
module.exports = fibonacciRec;
