// Create a function which will hold another function.
function bankAccount() {
  // Create two variables inside of the outer function.
  // We will be accessing the two variables inside of our inner function.
  const checking = 400;
  const savings = 1000;

  // Return a newly created inner function.
  return {
    displayFunds: function () { // defines function
      // We have access to our outer functions variable which we console.log.
      // This is a closure. The inner function has access to the outer functions scope.
      console.log(
        `You have $${checking} in your checking account and $${savings} in your savings account`
      );
    },
  };
}

// closure allows you to access variables inside the function
// closure is a concept, it's not tangible, although does show up in dev tools
// closure is created whenever inner function accesses outer function's variables
// displayFunds is inner, bankAccount is outer

// Create a new variable which holds the `bankAccount` function.
const myBank = bankAccount(); // will print console log text

// With our newly created variable call the `displayFunds` method attached to it.
myBank.displayFunds(); // myBank is an object

// Check the console and expand the given object -> displayFunds -> Scope and then you should be able to visually see your closures.
console.dir(myBank);

// By console logging the outer function's variable we can see that the variables are not able to be accessed.
// will print error because variables only exist inside function
console.log(checking);
console.log(savings);
