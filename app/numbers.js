exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    const binNum = num.toString(2);
    return parseInt(binNum.charAt(binNum.length - bit));
  },

  base10: function(str) {
    return parseInt(str, 2)
  },

  convertToBinary: function(num) {
    const str = num.toString(2);
    return str.padStart(8, '0');
  },

  multiply: function(a, b) {
    const v = a * b;
    return Number(v.toPrecision(4));
  }
};
