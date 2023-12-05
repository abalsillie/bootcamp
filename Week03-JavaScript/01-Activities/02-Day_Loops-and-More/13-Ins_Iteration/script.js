// We use a for-loop to execute code more than once
// Code will keep running until it's untrue, in this case, 5 times until i=4
// i++ is shorthand for i+1
// Shorthand for having to write out for each var
for (var i = 0; i < 5; i++) {
    // This is the block of code that will run each time
    console.log("This is the current value of i: " + i + ".");
}

// For-loops are often used to iterate over arrays
// Array length = 4
var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

// To determine how many times the loop should execute, we use the array's length
// Telling it to start at var 0; so long as i is less than the length of the array, add 1 to the array
for (var i = 0; i < zooAnimals.length; i++) { 
    console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}
