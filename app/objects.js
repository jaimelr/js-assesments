exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    return constructor.prototype.greeting = greeting
  },

  iterate: function(obj) {
    let res = []
    for(let key in obj) {
      if (obj.hasOwnProperty(key)) {
        res.push(key + ': ' + obj[key])
      }
    }

    return res;
  }
};
