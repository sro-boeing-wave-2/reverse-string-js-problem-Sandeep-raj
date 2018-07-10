// The intent of this file is to reverse
// the string using built in functions.

let res = '';
const reverse = (str) => {
  res = str.split('').reverse().join('');
  return res;
};

module.exports = reverse;
