// Without rest operator
function add(x, y) { // use add to add variables
  return x + y;
}
console.log(add(1, 2, 3, 4, 5)); // => 3

// 1. With rest operator
// Uncomment this to see how rest operators work!

function add(...nums) { // nums is array: 3 dots together is a rest operator,  means that variable will be an array
  let sum = 0;
  for (let num of nums) sum += num;
  return sum;
}

console.log(add(1)); // => 1
console.log(add(3, 3)); // => 6
console.log(add(1, 1, 4, 5)); // => 11

// 2. Uncomment to see how rest operators store values!
function howManyArgs(...args) { // args is an array
  return `You passed ${args.length} arguments.`; // point out the template literal
}

console.log(howManyArgs(0, 1)); // You have passed 2 arguments, array length is 2
console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments, array length is 4

// 3. Spread Operator
// breaks apart array into individual elements
const dragons = ["Drogon", "Viserion", "Rhaegal"];
const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons

// array declaration dragons inside array
// inside array 3 dots means spread operator, instead of condensing array it spreads them apart

// Uncomment below to see how spread operators work!
console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]

// example of use is you might want to save some info in a separate array to be used elsewhere/ gives more flexibility
function addTitles(firsTitle, secondTitle, ...otherTitles) {
  console.log(firstTitle);
  console.log(secondTitle);
  for (const iterator of otherTitles) {
    console.log(iterator)
  }
}

addTitles('Mr', 'Master');