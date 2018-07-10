// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (str) => {
  let i;
  let temp = '';
  for (i = str.length - 1; i >= 0; i -= 1) {
    temp += str[i];
  }
  return (temp);
};

module.exports = reverse;
