const CustomError = require('../extensions/custom-error');

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const numTransfers = 2 ** disksNumber - 1;
  const timeTransfers = Math.floor((numTransfers * 3600) / turnsSpeed);
  return { turns: numTransfers, seconds: timeTransfers };
};
