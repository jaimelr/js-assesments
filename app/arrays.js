exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce((sum, currentVal) => sum + currentVal);
  },

  remove: function(arr, item) {
    return arr.filter((value) => value !== item);
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item)
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);

    return arr;
  },

  curtail: function(arr) {
    arr.shift();

    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);

    return arr;
  },

  count: function(arr, item) {
    const itemCount = 0;

    return arr.reduce((itemCount = 0, currentValue) => {
      if (currentValue === item) {
        itemCount++;
      }
      return itemCount;
    }, 0);
  },

  duplicates: function(arr) {
    const duplicates = []
    arr.sort().filter((value, index) => {
      if (value === arr[index + 1]) {
        if (!duplicates.includes(value)) {
          duplicates.push(value);
        }
      }
    });

    return duplicates;
  },

  square: function(arr) {
    return arr.map(value => value * value)
  },

  findAllOccurrences: function(arr, target) {
    const ocurrences = []
    arr.map((value, index) => {
      if (value === target) {
        ocurrences.push(index);
      }
    })

    return ocurrences;
  }
};
