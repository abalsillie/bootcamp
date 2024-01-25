// let is the modern way to declare a variable, and is block scope
// anything inside curly braces is considered a BLOCK (like a function)
// var has 2 scopes- global and function
// var can be re-declared
// let can replace var

// 1. When using var, our counter exists after a for-loop is done

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); // Prints 5

// When using let, our counter is not defined outside of the for-loop block

let x = 42;

for (let j = 0; j < 5; j++) {
  console.log(j);
  console.log(x);
}

console.log(j); // ReferenceError: j is not defined

let j = 42;
console.log(j); // prints 42

// ==========================================================================

// 2. When using while loops, any values we create inside exist outside of the while-loop block

var count = 0;

while (count < 5) {
  var tripled = count * 3;
  count++;
}

// console.log(tripled); // Prints 12

// ==========================================================================

// 3. When using let, values defined inside of the while-loop block don't exist outside of it

let c = 0; // this let is global

while (c < 5) {
  let quadrupled = c * 4; // let only defined inside function
  c++;
}

// console.log(quadrupled); // ReferenceError: quadrupled is not defined

// ==========================================================================

// 4. When writing conditionals, values defined inside the conditional block exist outside of it

if (true) {
  var favoriteColor = "red"; // global as not inside a function
}

console.log(favoriteColor); // Prints `red`, because it's global can print

// When using let, values defined inside of a conditional block don't exist outside

// let favoriteFood;

// if (true) {
//   favoriteFood = "pizza";
// }

// This works since favoriteColor is not defined inside of a block
// console.log(favoriteFood);
// Prints `pizza`
