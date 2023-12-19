// TODO: CONVERT IT TO 1 DECIMAL PLACE

const convertToCelsius = (temp) => parseFloat(((temp - 32) * 5 / 9).toFixed(1))

const convertToFahrenheit = (temp) => parseFloat((temp * 9 / 5 + 32).toFixed(1))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
