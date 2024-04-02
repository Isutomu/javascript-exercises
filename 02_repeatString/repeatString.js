const repeatString = function(word, timesToRepeat) {
    if (timesToRepeat < 0) {
        return 'ERROR';
    }
    if (word === '') {
        return '';
    }
    
    let wordRepeated = '';
    for (let i=0; i<timesToRepeat; i++) {
        wordRepeated += word;
    }
    return wordRepeated;
};

// Do not edit below this line
module.exports = repeatString;
