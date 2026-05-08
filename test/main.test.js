

const { checkNumber } = require('../src/main');


test("checkNumber - ", () => {
  // Test case 1: num > 0
  expect(checkNumber(5)).toBe(5);
    // Test case 2: num < 0
    expect(checkNumber(-3)).toBe(0);
    // Test case 3: num = 0
    expect(checkNumber(0)).toBe(-1);
});