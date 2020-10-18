const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(numActivity) {
  if (!numActivity || typeof numActivity !== 'Number') return false;
  k = 0.693 / HALF_LIFE_PERIOD;
  t = Math.log(MODERN_ACTIVITY / Number(numActivity)) / k;

  return Math.ceil(t);
};
