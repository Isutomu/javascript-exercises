const removeFromArray = function(inputArray, ...valuesToRemove) {
  return inputArray.filter((arrayElement) => !valuesToRemove.includes(arrayElement));
};

// Do not edit below this line
module.exports = removeFromArray;
