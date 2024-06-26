// The props variable is an object containing the welcomeClass helper method on the clickHandler property
function Greeting(props) {
  const welcomeStudent = () => {
    alert(`Welcome, John!`)
  }

  return (
    <div className="container text-center">
      <div className="list-group">
        {/* In React, we can directly attach event listeners to the to the relevant markup */}
        <button 
          onClick={props.clickHandler} // property refers to event handler
          className="list-group-item list-group-item-action list-group-item-info" 
          aria-current="true"
        >
          Greet the Students!
        </button>
        <button 
          onClick={welcomeStudent} 
          className="list-group-item list-group-item-action"
        >
          John
        </button>
      </div>
    </div>
  );
}

export default Greeting;
