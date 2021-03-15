module.exports = function reverse (number) {
   return parseInt(String(number).split('').reverse().join(''),10);
};
