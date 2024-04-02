const removeFromArray = function(inputArray, ...valuesToRemove) {
  function isInInputArray(value) {
    for (element of valuesToRemove) {
        if (value === element) return true;
    }
  }
  return inputArray.filter((arrayElement) => !isInInputArray(arrayElement));
};

// Do not edit below this line
module.exports = removeFromArray;
