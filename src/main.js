



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

const login = (email, password) => {

  if (!email || !password) {
    throw new Error("Email and password are required.");
  }
    return "Login successful.";

}
module.exports = {checkNumber, loginName, arrayREturn, login}; 