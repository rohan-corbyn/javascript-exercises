const convertToCelsius = function(farhrenheit) {
  const celcius = (farhrenheit - 32) * (5 / 9);
  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function(celcius) {
  const farhrenheit = celcius * (9/5) + 32;
  return Math.round(farhrenheit * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
