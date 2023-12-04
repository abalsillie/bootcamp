// Declares student variable using var keyword 
// Can also use student_name but stay consistent with which convention you use
var studentName;

// Uses assignment operator(=) to assign a value
// Number doesn't need to be quoted
// Dynamic language- content not defined, studentAge can be any value
var studentName = "Abdul";
var studentAge = 32;

// To re-assign a variable, use only the variable's name  
// Re-assigning a variable defined above
// Drop var function
studentName = "Tonya";
studentAge = 52;

// To access a value stored in a variable, use the variable's name
// Access values as above, Tonya, 52
console.log(studentName);

//To combine the message with a variable value use the concatenation operator(+)
//Logs "My name is "
console.log("My name is ");

// Logs "My name is Tonya"
console.log("My name is " + studentName);
