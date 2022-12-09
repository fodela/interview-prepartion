class MyStack {
  top = -1;
  items = {};

  get peek() {
    return this.items[this.top];
  }

  push(item) {
    this.top += 1;
    this.items[this.top] = item;
  }
}

module.exports = MyStack;
