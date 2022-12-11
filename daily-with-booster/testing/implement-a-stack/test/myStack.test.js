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

  it("pop off an item from the stack", () => {
    myStack.push("😄");
    myStack.pop();
    expect(myStack.top).toBe(-1);
    expect(myStack.peek).toBe(undefined);

    myStack.push("😸");
    myStack.push("🐶");
    myStack.pop();
    expect(myStack.top).toBe(0);
    expect(myStack.peek).toBe("😸");
  });

  it("has a size", () => {
    myStack.push("😸");
    expect(myStack.size).toBe(1);
    myStack.push("🐶");
    myStack.push("😄");
    expect(myStack.size).toBe(3);
  });
});
