const findTheOldest = function(array) {
    let oldest = { name: "", age: 0 };
  for (const item of array) {
    const end =  Number.parseInt(item.yearOfDeath ?? new Date().getFullYear())
    const age = end - item.yearOfBirth;
    if (oldest.age < age) {
      oldest = { name: item.name, age };
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
