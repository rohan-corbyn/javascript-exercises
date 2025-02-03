const mergeSortRec = function (unsortedArray) {

  if (unsortedArray.length <= 1) return unsortedArray;

  const middle = Math.floor(unsortedArray.length / 2);
  const left = mergeSortRec(unsortedArray.slice(0, middle));
  const right = mergeSortRec(unsortedArray.slice(middle));

  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
};


// Do not edit below this line
module.exports = mergeSortRec;
