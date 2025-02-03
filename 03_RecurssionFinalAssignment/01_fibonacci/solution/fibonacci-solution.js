
const fibonacci = function (n) {

  let array = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      array.push(0)
    } else if (i === 1) {
      array.push(1)
    } else {
      array.push(array[i - 2] + array[i - 1]);
    }
    console.log(array);
  }

  return array;
};

module.exports = fibonacci;
