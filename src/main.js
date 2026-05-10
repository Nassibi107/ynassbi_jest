



function checkNumber(num) {
  if (num > 0) {
    return num;
  } if (num < 0) {
    return 0;
  }
  return -1;
}

const loginName = () => {
  return "ynassibi";
}

const arrayREturn  =  () => { 
  return [1, 2, 3, 4];
};
module.exports = {checkNumber, loginName, arrayREturn}; 