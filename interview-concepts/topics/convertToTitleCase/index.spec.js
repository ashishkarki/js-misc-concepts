// Write a function to convert a string to title case

// Provided test cases
//   titleCase(“I’m a little tea pot”) should return a string.
//   titleCase(“I’m a little tea pot”) should return “I’m A Little Tea Pot”.
//   titleCase(“sHoRt AnD sToUt”) should return “Short And Stout”.
//   titleCase(“HERE IS MY HANDLE HERE IS MY SPOUT”) should return “Here Is My Handle Here Is My Spout”.

const titleCase = require("./index");

describe("titleCase() should =>", () => {
  it("should return a string", () => {
    expect(typeof titleCase("I’m a little tea pot")).toBe("string");
  });

  it("for “I’m a little tea pot” should return “I’m A Little Tea Pot”", () => {
    expect(titleCase("I’m a little tea pot")).toBe("I’m A Little Tea Pot");
  });

  it("for “sHoRt AnD sToUt” should return “Short And Stout”", () => {
    expect(titleCase("sHoRt AnD sToUt")).toBe("Short And Stout");
  });

  it("for “HERE IS MY HANDLE HERE IS MY SPOUT” should return “Here Is My Handle Here Is My Spout”", () => {
    expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).toBe(
      "Here Is My Handle Here Is My Spout"
    );
  });
});
