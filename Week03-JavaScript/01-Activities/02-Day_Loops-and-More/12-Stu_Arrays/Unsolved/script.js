// Define array
var names = ["Jack", "Alex", "Chee", "Al"];

// Check length of array
console.log(names.length);

// Return "welcome" + name
console.log("Welcome " + names[0]);
console.log("Welcome " + names[1]);
console.log("Welcome " + names[2]);
console.log("Welcome " + names[3]);

// Change the value of Name 0
names[0] = "Casey"; 

// Check if Casey is here and confirm
if (names[0] === "Casey") {
    console.log(names[0] + " is in the class");
}