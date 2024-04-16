// First we import `useState` with React so that we can take advantage of the hook
import { useState } from 'react';
// useState is inbuilt func library from react

export default function Counter() {
  // To set a state variable using `useState`, we give our variable a name of `count`.
  // We also set the name of the function that will update `count`. We called it `setCount`.
  // useState accepts only one argument - the initial value of the state variable.
  let [count, setCount] = useState(0); // destructuring from an array, count and setCount variable from useState
  // useState take in input, called initial state, in this example, 0
  // count starts as 0, if ever want to change, use setCount
  
  // This is a handler that we will reference in our `onClick` attribute later
  const handleClick = () => {
    setCount((count + 1)); // using setCount func, set new state to count + 1, increase/ change state
    console.log(`New value of count: ${count}`);
  };

  return ( // returning jsx
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {count}</p>
        {/* using count element from above */}
        {/* In our button element, we add a onClick event that invokes our handleClick method */}
        <button className="btn btn-primary" type="button" onClick={handleClick}>
          Increment
        </button>
      </div>
    </div>
  );
}

// hooks provide us functionality to have state
// looking at use state hook