const fibonacci = function(number) {
    const numberConvert = Number(number);
    if(numberConvert == 0) {
        return 0;
    }
    if(numberConvert < 0) {
        return 'OOPS';
    }

    const fibonacciArr = [1, 1];
    for(let i=2; i<numberConvert; i++) {
        fibonacciArr.push(fibonacciArr[i-2] + fibonacciArr[i-1]);
    }
    return fibonacciArr[numberConvert-1];
};

// Do not edit below this line
module.exports = fibonacci;
