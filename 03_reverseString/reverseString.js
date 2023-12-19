const reverseString = function (text) {
  let result = "";

  for (let index = text.length - 1; index >= 0; index--) {
    result += text[index];
  }
  return result
};

// Do not edit below this line
module.exports = reverseString;
