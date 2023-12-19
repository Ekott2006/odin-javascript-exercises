const repeatString = function(text, end) {
    let result = ""
    if (end < 0) {
        return "ERROR"
    }
    for (let index = 0; index < end; index++) {
        result += text
    }
    return result

};

// Do not edit below this line
module.exports = repeatString;
