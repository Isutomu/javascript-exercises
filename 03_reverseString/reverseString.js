const reverseString = function(word) {
  let reversedWord = [];
  for (letter of word) {
    reversedWord.unshift(letter);
  }
  return reversedWord.join('');
};

// Do not edit below this line
module.exports = reverseString;
