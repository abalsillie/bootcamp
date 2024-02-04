// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
const newSongs = [...songs]; // spread operator because it's in an array, putting songs array into new array called newSongs

// TODO: What do you expect to be logged in the console?
console.log(newSongs); // the songs array which is now the same as the newSongs array

// Exercise 2
const addition = (x, y, z) => { // 3 parametres x, y and z
  const array = [x, y, z]; // puts x, y and z in array for reduce function
  // TODO: What does the reduce() method do?
  return array.reduce((a, b) => a + b, 0); // reduce takes elements and returns sum value, will return single value
};
// TODO: What do you expect to be logged in the console?
console.log(addition(1, 2, 3));
// reduce executes reduce function on each element of the array
// sum is 6

// TODO: What is this syntax that is being used as the parameter?
const additionSpread = (...array) => { // infinite parametres, not just x, y, z now
  return array.reduce((a, b) => a + b, 0); // 0 is initial value
};

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3)); // 6

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3, 4, 100)); // 110 (maths below)

// reduce function
// 1+2=3 (3, 3, 4, 100)
// 3+3=6 (6, 4, 100)
// 6+4=10 (10, 100)
// 10+100=110 (110)