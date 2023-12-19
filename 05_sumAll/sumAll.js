const sumAll = function(start, end) {
    let sum = 0
    if (start < 0 || end < 0 || typeof start != "number" || typeof end != "number") {
        return "ERROR"
    }
    if (end < start) {
        let swap = end
        end = start;
        start = swap;
    }
    for (let index = start; index <= end; index++) {
        sum += index
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
