import { useState, useEffect } from 'react';

export default function Display() {
  const [count, setCount] = useState(0);

  // When the component mounts to the VDOM, run this callback
  useEffect(() => {
    const storedCount = localStorage.getItem('myCount');

    // If the value is found in storage, convert the string to a number and update state
    if (storedCount) {
      setCount(
        parseInt(storedCount)
      )
    }
  }, []) // dependency array, when what's in array changes, useEffect will run again

  // When the state changes run this callback
  useEffect(() => {
    // Update the localStorage count variable using the setItem method
    localStorage.setItem('myCount', count);
  });

  const handleIncrease = () => {
    setCount(count + 1);
  }; // sets count plus one, because this changed, useEffect should run

  const clearStorage = () => {
    localStorage.clear();
    setCount(0); // clears storage and sets count back to 0
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <code>check localStorage in developer console</code>
      <hr />
      <button type="button" onClick={handleIncrease}>
        Click Me
        {/* click me button triggers handleIncrease function */}
      </button>
      <button type="button" onClick={clearStorage}>
        Reset Count
        {/* reset count button triggers clearStorage func */}
      </button>
    </div>
  );
}
