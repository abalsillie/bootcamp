// Follow the thread of execution 
// 1) greeting is stored in the global execution context
const greeting = 'Hello'; // variable string saved in var

// 2) sayHello is stored in the global execution context
function sayHello(name) { // function defined
  // 5) Once the sayHello execution context is created, "Gabby" is assigned to name
  // 6) salutation is stored in the function execution context of sayHello. It is assigned the string, 'how are you?'
  const salutation = 'how are you?'; // salutation saved in a string var

  // 7) The global execution context as well as the local function execution context are accessible
  console.log(`${greeting} ${name}, ${salutation}`); // will log 'Hello name, how are you?'
}

// 3) The alert is a Web API, once resolved, is stored in the callback queue then the call stack to be processed
alert("What's up doc?"); // alert loads upon page loading

// 4) Calling sayHello, places it on the call stack which creates a new function execution context
sayHello("Gabby"); // calls say hello function, passing in name 'Gabby'

// shows in console log