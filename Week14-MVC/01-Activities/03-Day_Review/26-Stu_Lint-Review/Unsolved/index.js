const numbers = [2, 4, 6, 8];
// let squaredNums = undefined;
// don't allow undefined declarations
// no-undef-init is rule, set to error in .eslintrc.json
// "es2017": true

if (numbers.length > 0) {
  squaredNums = numbers.map((num) => {
    return num ** 2; // ** shouldn't give error
  });
}
// "no-undef-init": "error",

console.log(squaredNums);

// in terminal: npm run lint
