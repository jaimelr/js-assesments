exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var duplicatedChars = [];
    var tmp = '';

    function getDuplicatedChars(str, index) {
      return str.filter(c => c == str[index])
    }
    for (let i = 0; i < str.length; i++) {
      if (tmp === str[i]) {
        continue;
      }
      tmp = str[i]
      duplicatedChars.push(getDuplicatedChars(str.split(''), i))
    }

    var res = duplicatedChars.map(arr => {
      while(arr.length > amount)
        arr.pop()
      return arr.join('');
    });

    return res.join('');
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
