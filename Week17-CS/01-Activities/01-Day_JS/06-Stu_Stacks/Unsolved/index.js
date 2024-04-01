// create the Stack class with two methods to remove and add an element
// can take in empty or existing array
class Stack {
  // take in empty array
  constructor(container = []) {
    this.container = container;
  }

  // add to the top of the stack
  addToStack(el) {
    return this.container.push(el); // push to top of stack
  }

  // remove from the top of the stack
  removeFromStack() {
    return this.container.pop(); // pop off the end
  }
}

module.exports = Stack;
