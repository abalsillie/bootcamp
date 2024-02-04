// Depending on the environment `setTimeout` is called in, it may refer to one of two objects
// In the browser, `setTimeout` is a property of the `window` object
// In node, it belongs to a special "Timeout" object

var person = { // object person
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking..."); // person.name (Hodor) is thinking
    setTimeout(function() {
      console.log(this.name + "!"); // 'this' is undefined, as function inside a function, use arrow function instead
    }, 100); // 100 miliseconds after
  }
};

person.saySomething(); // prints "Hodor is thinking..."
// prints "undefined!" 100ms later

// Arrow functions bind the `this` keyword to the object it's created inside of
// i.e. whatever `this` is where it's created
var person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");
    setTimeout(() => console.log(this.name + "!"), 100); // arrow function syntax recognises 'this' as person in this second function
  }
};

person.saySomething(); // "Prints Hodor is thinking..."
// prints `Hodor!` 100ms later
