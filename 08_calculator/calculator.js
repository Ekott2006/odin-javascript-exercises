const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = function (array) {
  let result = 0;
  for (const num of array) {
    result += num;
  }
  return result;
};

const multiply = function (array) {
  let result = 1;
  for (const num of array) {
    result *= num;
  }
  return result;
};

const power = function (num, exponent) {
  let result = 1;
  for (let index = 0; index < exponent; index++) {
    result *= num;
  }
  return result;
};

const factorial = function (num) {
  let result = 1;
  for (let index = 1; index <= num; index++) {
    result *= index;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
