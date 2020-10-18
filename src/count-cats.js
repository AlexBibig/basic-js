const CustomError = require('../extensions/custom-error');

module.exports = function countCats(cats) {
  // throw new CustomError('Not implemented');
  return cats
    .map((el) => el.filter((item) => item === '^^'))
    .reduce((sum, cur) => sum + cur.length, 0);
};
