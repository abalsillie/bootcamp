// Immediately export a function that generates a string of random numbers and letters.
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

// helpers are functions that help you to do work, use it again and again