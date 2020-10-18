const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  let string = arr.filter(el => typeof el === 'string');
  return string
    .map(el => el.trim()[0].toUpperCase())
    .sort()
    .join('');
};
