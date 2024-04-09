const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((acum, item) => acum+item, 0);
};

const multiply = function(arr) {
  return arr.reduce((acum, item) => acum*item, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(number) {
	let fact = 1;
  if([0,1].includes(number)) {
    return 1;
  }
  else {
    for(let i=2; i<=number; i++) {
      fact *= i;
    }
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
