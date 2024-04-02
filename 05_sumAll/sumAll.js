const sumAll = function(min, max) {
    if (min<0 || max<0 || !Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';

    // The formula for arithmetic progression is:
    //(smallerValue + biggerValue) x n / 2
    //where n is the total amount of numbers being added
    const sum = (min+max)*(Math.abs(max-min)+1)/2;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
