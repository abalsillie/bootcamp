//"this" refers to the object above, not inside the function

// 1. funnyCase makes each letter in a string the opposite case as the one before
var funnyCase = string => {
  var newString = ""; // empty string
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) newString += string[i].toLowerCase(); // if even number in the string, lowercase, remember letter 1=0, spaces and characters included in the string
    // yOu cAn't
    // 0123456789 => all even numbers are lowercase
    else newString += string[i].toUpperCase(); // otherwise upper case
  }
  return newString;
};

// Prints `yOu cAn't jUsT Do wHaTeVeR YoU WaNt aLl tHe tImE!`
console.log(funnyCase("You can't just do whatever you want all the time!"));

// --------------------------------------------------------------------------

// 2. Map lets you loop over an array and modify the elements inside
// arr and cb are variables
var map = (arr, cb) => {
  var result = []; // empty array
  for (var index = 0; index < arr.length; index++) {
    var currentElement = arr[index];
    result.push(cb(currentElement, index));
  }
  return result;
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// prints double of each number [2,  4,  6,  8, 10, 12, 14, 16, 18, 20]

// another way to write this is...
// var doubled = map(numbers, element => element*2)
var doubled = map(numbers, element => {
  return element * 2
});

console.log(doubled);
// logs double of each number [2,  4,  6,  8, 10, 12, 14, 16, 18, 20]

// --------------------------------------------------------------------------

// 3. filter lets you loop over an array and remove elements
var filter = (arr, cb) => { // parametres arr and cb
  var result = [];
  for (var index = 0; index < arr.length; index++) {
    var currentElement = arr[index];
    if (cb(currentElement, index)) {
      result.push(currentElement);
    }
  }
  return result;
};

var evenNumbers = filter(numbers, currentElement => {
  return currentElement % 2 === 0 // numbers divisible by 2
});

console.log(evenNumbers);
// Prints `[ 2, 4, 6, 8, 10 ]`

// --------------------------------------------------------------------------

// 4. netflixQueue is an object for managing your netflix queue
var netflixQueue = {
  queue: [
    "Mr. Nobody",
    "The Matrix",
    "Eternal Sunshine of the Spotless Mind",
    "Fight Club"
  ], // key, array of values, object is being used
  // these are all arrow function, this is the global object and will cause errors
  // turn these back to
  watchMovie: () => {
    this.queue.pop(); // this is undefined, no context, need to use regular function
  }, // pop gives last object of array
  addMovie: (movie) => { // a function within a function, movie is the object
    this.queue.unshift(movie);
  }, // unshift = add to front of array
  printQueue: () => { // for loop that prints all this out
    var list = "";
    for (var i = this.queue.length - 1; i >= 0; i--) {
      var currentMovie = this.queue[i];
      list += (this.queue.length - i) + ". " + currentMovie + "\n"; // the this is not "queue" but the global object
    }
    console.log(list);
  }
};

console.log("Printing movie queue!\n");
netflixQueue.printQueue();
netflixQueue.watchMovie();
console.log("\nWatched a movie!\n");
console.log("Printing movie queue!\n");
netflixQueue.printQueue();
console.log("\nAdding a movie!\n");
netflixQueue.addMovie("Black Swan");
console.log("Printing movie queue!\n");
netflixQueue.printQueue();

// to run the code, open terminal, input "node" inpu= index.js
