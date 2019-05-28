exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const arr = []
        data.people.forEach(person => arr.push(person.name));
        return arr.sort();
      })
  }
};
