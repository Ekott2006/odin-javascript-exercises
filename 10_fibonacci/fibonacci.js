const fibonacci = function(num) {
    if (num == 0) {
        return 0
    }
    if (num < 0) {
        return "OOPS"
    }
    let last2digits = [0, 1]
    for (let index = 1; index < num; index++) {
        last2digits = [last2digits[1], last2digits[0] + last2digits[1]]
    }
    return last2digits[1]
};

// Do not edit below this line
module.exports = fibonacci;
