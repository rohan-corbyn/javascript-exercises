const searchObject = function (nestedObject, searchValue) {
  if (typeof nestedObject !== "object" || nestedObject === null) {
    return nestedObject === searchValue;
  }

  for (const value of Object.values(nestedObject)) {
    if (contains(value, searchValue)) {
      return true;
    }
  }

    return false;
};

// Do not edit below this line

module.exports = searchObject;
