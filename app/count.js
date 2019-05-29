exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var timer;

    const printNumber = () => {
      console.log(start);
      start++;
      if (start <= end) {
        timer = setTimeout(printNumber, 100);
      }
    }

    printNumber();

    const control = {
      cancel: function () {
        clearTimeout(timer);
      }
    };

    return control;
  }
};
