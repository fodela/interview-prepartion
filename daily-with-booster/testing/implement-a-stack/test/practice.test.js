const { sum, array } = require("../src/practice");

describe("Practice testing with jest", () => {
  it("properly adds two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("create a copy of array in memory", () => {
    expect(array([1, 2, 3])).toEqual([1, 2, 3]);
    expect(array([1, 2, 3])).not.toBe([1, 2, 3]);
  });
});
