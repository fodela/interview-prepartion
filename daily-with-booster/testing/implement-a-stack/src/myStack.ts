class MyStack {
  top = -1;
  items = {};

  get peek() {
    return this.items[this.top];
  }

  get size() {
    return this.top + 1;
  }

  push(item) {
    this.top += 1;
    this.items[this.top] = item;
  }

  pop() {
    delete this.items[this.top];
    this.top -= 1;
  }
}

module.exports = MyStack;
