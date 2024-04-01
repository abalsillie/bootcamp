// TODO: Add a comment describing what the `position` parameter means for this function.
const fibonacci = (position) => { // pass in starting value
  // TODO: Add a comment describing the purpose of this conditional statement.
  if (position < 2) {
    return position;
  } // if value is less than 2, return the value itself

  // TODO: Add a comment describing the purpose of this return statement.
  return fibonacci(position - 1) + fibonacci(position - 2);
}; // otherwise returns the position less one, plus the position less 2 (describing how the sequence works)

// TODO: What will this return?
console.log(fibonacci(9)); // starting position of 9

// 0,1,2,3,5,8,13,21,34
// 9th fibonacci is 34, therefore console.log 34
