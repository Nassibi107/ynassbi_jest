

const { checkNumber, loginName ,arrayREturn ,login} = require('../src/main');


test("checkNumber - ", () => {
  // Test case 1: num > 0
  expect(checkNumber(5)).toBe(5);
    // Test case 2: num < 0
    expect(checkNumber(-3)).toBe(0);
    // Test case 3: num = 0
    expect(checkNumber(0)).toBe(-1);
});


describe("testing string - ", () => {

  it("should return ynassibi", () => {
    expect(loginName()).toBe("ynassibi");
  });

});

describe("testing array - ", () => {

  it("should return [1, 2, 3, 4]", () => {
    expect(arrayREturn()).toEqual([1, 2, 3, 4]);
  });

  it ("should return an array of length 4", () => {
    expect(arrayREturn()).toHaveLength(4);
  });

  it ("should contain the number 2", () => {
    expect(arrayREturn()).toContain(2);
  });
  it ("should not contain the number 5", () => {
    expect(arrayREturn()).not.toContain(5);
  });
  it ("should not null", () => {
    expect(arrayREturn()).not.toBeNull();
  });
});

describe("testing login - ", () => {

  const validEmail = ["" , null, undefined , 0, false] ; 
  const validPassword = ["" , null, undefined , 0, false] ; 
  
   validEmail.forEach(email => {
    it(`should return error message when email is ${email}`, () => {
      expect(() => login(email, "password")).toThrow();
    });
  });

  validPassword.forEach(password => {
    it(`should return error message when password is ${password}`, () => {
      expect(() => login("email", password)).toThrow();
    });
  });

  it("should return success message when email and password are valid", () => {
    expect(login("email", "password")).toBe("Login successful.");
  });
  
} );