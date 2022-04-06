const countVowels = require("./index");

describe("countVowels() should => ", () => {
  it("return the number of vowels in a string", () => {
    expect(countVowels("aeiou")).toBe(5);
  });

  it("returns 0 if there are no vowels in the string", () => {
    expect(countVowels("bcdfghjklmnpqrstvwxyz")).toBe(0);
  });
});
