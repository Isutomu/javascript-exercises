const convertToCelsius = function(temperature) {
  const convertedTemp = ((temperature - 32) * 5 / 9).toFixed(1);
  const roundedConvertedTemp = Math.round(convertedTemp);
  return Number(roundedConvertedTemp == convertedTemp ? roundedConvertedTemp : convertedTemp);
};

const convertToFahrenheit = function(temperature) {
  const convertedTemp = (temperature * 9 / 5 + 32).toFixed(1);
  const roundedConvertedTemp = Math.round(convertedTemp);
  return Number(roundedConvertedTemp == convertedTemp ? roundedConvertedTemp : convertedTemp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
