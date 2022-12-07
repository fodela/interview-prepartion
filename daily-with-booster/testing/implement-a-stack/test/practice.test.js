const { sum, array } = require("../src/sum");

describe("Practice testing with jest", () => {
  it("properly adds two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
