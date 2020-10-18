const CustomError = require('../extensions/custom-error');

const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(String(value));
    return this;
  },
  removeLink(position) {
    if (!this.chainArr[position - 1] || typeof position !== 'number') {
      this.chainArr = [];
      throw new Error();
    } else {
      this.chainArr.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let result = this.chainArr.reduce((acc, cur, index) => {
      if (index === 0) {
        acc += `( ${cur} )`;
        return acc;
      } else {
        acc += `~~( ${cur} )`;
        return acc;
      }
    }, '');
    this.chainArr = [];
    return result;
  },
};

module.exports = chainMaker;
