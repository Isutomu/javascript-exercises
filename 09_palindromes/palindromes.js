const palindromes = function (word) {
    let regex = /^[a-zA-Z0-9]+$/;
    const wordArr = word.split('').filter(letter => regex.test(letter));
    const reverseWordArr = wordArr.slice().reverse();
    
    return wordArr.join('').toLowerCase().localeCompare(reverseWordArr.join('').toLowerCase()) === 0;
};

// Do not edit below this line
module.exports = palindromes;
