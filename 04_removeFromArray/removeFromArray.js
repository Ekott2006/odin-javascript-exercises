const removeFromArray = function (array, ...params) {
  let result = [];
  for (const num of array) {
    if (!params.find((param) => param == num && typeof param === typeof num)) {
      result.push(num);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
