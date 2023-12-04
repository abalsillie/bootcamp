// Declaring and assigning values in 1 step
// Number variable
var one = 64;
// String variable - in quotation marks, which is how we know it's a string
var two = "656302";
// Boolean variable
var three = false;
// Number variable with decimal
var four = 64.55;
// String variable
var five = "Howdy!";
// Undefined variable - nothing
var six;

// Logs number
console.log(typeof one); 
// Logs string
console.log(typeof two); 
// Logs boolean
console.log(typeof three); 
// Logs number
console.log(typeof four); 
// Logs variable
console.log(typeof five);
// Logs undefined
console.log(typeof six);

// Reassigned from number to string
four = "Hello!";
// Reassigned from string to boolean
five = false;
// Reassigned from undefined to number
six = 23;

// Logs string
console.log(typeof four);
// Logs boolean
console.log(typeof five);
// Logs number
console.log(typeof six);
