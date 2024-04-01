// Follow the thread of execution
function outer() { // function outer
  // timer is set to 10 milliseconds, once resolved the console.log is stored in the callback queue, then call stack
  // logs last, since it arrived last in the call back queue
  setTimeout(() => { // setTimeout is web API
    console.log("Hello world")
  }, 10); // 10ms delay

  function inner() {
    // Although the timer is zero, this log occurs after the statement below due to the event loop
    // 3) logs third, since it needed to wait in the call back queue
    setTimeout(() => {
      console.log("Are you listening?")
    }, 0);
    // 1) logs first since it heads straight to the call stack 
    console.log("Yes, I'm listening"); // simple console log
  }

  inner(); // inner function envoked
  // 2) goes to the call stack then resolves
  console.log("I like turtles")
}

outer(); // call outer function

// console
// Yes, I'm listening
// I like turtles
// Are you listening?
// Hello world
