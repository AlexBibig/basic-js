const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter;
    let depthCount = 1;
    arr.forEach(elem => {
      if (Array.isArray(elem)) {
        counter = 1 + this.calculateDepth(elem);
      }
      if (counter > depthCount) {
        depthCount = counter;
      }
      return depthCount;
    });
    counter = 1;
    return depthCount;
  }
};
