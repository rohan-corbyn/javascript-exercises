const searchObject = function (nestedObject, value) {
  if (typeof nestedObject === 'object') {
    return Object.keys(nestedObject).some(key => {
      searchObject(nestedObject[key], value);
    });
  }
    return nestedObject === value;
};

// Do not edit below this line

module.exports = searchObject;
