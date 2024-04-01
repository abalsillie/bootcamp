// recursive func, helpful if we don't know how big the values are
const countdown = (value) => {
  // for all values more than 0, logs the value then calls the function with a smaller argument
  if (value > 0) {
    console.log(value);
    // recursive call creates the loop
    return countdown(value - 1); // return the value less 1
  } else {
    // base condition stops the recursive call
    return value; // otherwise call the value
  }
};

countdown(10); // passing in starting value of 10
