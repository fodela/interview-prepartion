const MyStack = require("../src/myStack");

let stack;
beforeEach(() => {
  myStack = new MyStack();
});

describe("my stack implementation", () => {
  it("is created empty", () => {
    expect(myStack.top).toBe(-1);
    expect(myStack.items).toEqual({});
  });
  it("can push to the top", () => {
    myStack.push("🤯");
    expect(myStack.top).toBe(0);
    expect(myStack.peek).toBe("🤯");
  });
});
