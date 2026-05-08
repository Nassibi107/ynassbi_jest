



function checkNumber(num) {
  if (num > 0) {
    return num;
  } if (num < 0) {
    return 0;
  }
  return -1;
}

module.exports = {checkNumber}; 