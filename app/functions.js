exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    const [greeting, name, punctuation] = arr;
    return fn(greeting, name, punctuation);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str2) {
      return str + ', ' + str2;
    }
  },

  makeClosures: function(arr, fn) {
    var res = [];

    var tmp = function(num) {
      return function() {
        return fn(num);
      }
    };

    for (var i = 0; i < arr.length; i++) {
      res.push(tmp(arr[i]));
    }

    return res;
  },

  partial: function(fn, str1, str2) {
    var args = Array.prototype.slice.call(arguments, 1)

    return function() {
      var args2 = Array.prototype.slice.call(arguments)
      return fn(args[0], args[1] + args2[0].substr(0, 2));
    }
  },

  useArguments: function() {
    var args = Array.prototype.slice.call(arguments)
    return args.reduce((total, sum) => total + sum)
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1)
    return fn(...args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);

    return function() {
      var args2 = Array.prototype.slice.call(arguments);
      return fn(...args, ...args2)
    }
  },

  curryIt: function(fn, ...args) {
    var args = Array.prototype.slice.call(arguments, 1);

    if (fn.length <= args.length) {
      return fn(...args);
    }
    else {
      return function(full_args) {
        return functionsAnswers.curryIt(fn, ...args, full_args)
      }
    }
  }
};
