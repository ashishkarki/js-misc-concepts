const palindrome = require("./index");

describe("palindrome function should:", () => {
  it("return true if the string is a palindrome", () => {
    expect(palindrome("racecar")).toBe(true);
  });

  it("return false if the string is not a palindrome", () => {
    expect(palindrome("hello")).toBe(false);
  });
});
