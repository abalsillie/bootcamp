// var is function scoped, var can be used throughout
// let cannot be redeclared
// let allows you to not forget redeclaring
// let is BLOCK scoped



// TODO: Fix the declarations so that the function works properly.
const addGreetingMessage = (name) => {
  let message = 'How are you?';
  // cannot redeclare as a variable if this is let

  if (name.length > 0) {
    let message = 'Hello ' + name;
    console.log(message);
  } // a block within a block

  console.log(message);
};

addGreetingMessage('Tammy');

// TODO: Fix the declarations so that the function works properly.
const calloutCounter = () => {
  let callout = 'Outside of the loop'; // cannot change the const variable, cannot be redeclared as variable, change to let
  var counter = 5;

  while (counter > 0) {
    let callout = 'Inside the loop';
    console.log(counter, callout);
    counter--; // a block inside a block
  }

  console.log(callout);
};

calloutCounter();

// TODO: Fix the declarations so that the function works properly.
const countMatrix = (matrix) => {
  for (var i = 0; i < matrix.length; i++) {
    var line = matrix[i];
    for (var i = 0; i < line.length; i++) {
      var element = line[i];
      console.log(element);
    }
  }
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

countMatrix(matrix);
