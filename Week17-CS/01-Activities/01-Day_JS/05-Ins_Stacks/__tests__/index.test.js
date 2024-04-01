const Stack = require("../index");

describe("Stack class", () => {
  // Variables for testing
  const inputArray = [1, 2, 3, 4];
  const stack = new Stack(inputArray);
  const newItem = 5;
  
  test("can instantiate a new stack with an empty array", () => {
    const stack = new Stack(); // const stack
    expect(stack).toEqual({ container: [] }); // should be equal to empty array
  });

  test("can instantiate a new stack with an array", () => {
    expect(stack).toEqual({ container: [1, 2, 3, 4] }); // new stack defined here
  });

  test("can add a new element to the top of the stack", () => {
    stack.addToStack(newItem); // add a new item to stack (5)
    expect(stack).toEqual({ container: [1, 2, 3, 4, 5] }); // therefore should look like this
  });

  test("can remove items from the top of the stack", () => {
    const val = stack.removeFromStack(); // remove value from stack (FIFO)
    expect(val).toEqual(5); // expect value to be removed to be 5
    expect(stack).toEqual({ container: [1, 2, 3, 4] }); // to return this
  });
});
