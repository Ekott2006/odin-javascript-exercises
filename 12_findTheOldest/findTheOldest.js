const findTheOldest = function(array) {
    let oldest = {name:"", age: 0}
    for (const item of array) {
        const start = new Date(item.yearOfBirth, 0, 1)
        const end = item.yearOfDeath ? new Date(item.yearOfDeath, 0, 1) : Date.now()
        const age = new Date(end - start).getFullYear() -1970 
        if (oldest.age < age) {
            oldest = {name: item.name, age} 
        }
    }
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
