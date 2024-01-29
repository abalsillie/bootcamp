// use `process.argv` to assign two arguments to variables
// argv = argument
// the array is input in the terminal "node index.js 1 1/0"
// 'process' is a global object which is accessible in node.js (a library)

const a = process.argv[2]; // [2] is 1
const b = process.argv[3]; // [3] is 1/0

// compare those two variables to see whether they are the same or not

if (a===b) {
    console.log(true);
} else {
    console.log(false);
}

// OR

console.log(a===b? true:false);

// in terminal...
// node index.js first second, returns false
// node index.js first first, returns true
// node index.js 1 1, returns true
// node index.js 1 0, returns false
