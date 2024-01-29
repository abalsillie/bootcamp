// TODO: Import `maths.js`
const maths = require('./maths') // bring in maths library

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2]; // sum
const numOne = parseInt(process.argv[3]);
const numTwo = parseInt(process.argv[4]);
// return as strings, need to turn into integar, use parseint

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

switch (operation) {
    case 'sum':
        console.log(maths.sum(numOne, numTwo));
        break;
    case 'difference':
        console.log(maths.difference(numOne, numTwo));
        break;
    case 'product':
        console.log(maths.product(numOne, numTwo));
        break;
    case 'quotient':
        console.log(maths.quotient(numOne, numTwo));
        break;
    default: // catches if doesn't meet any of these
        console.log('DOUBLE CHECK!');
    break;
}

// in maths.js sum, different, product and quotient are keys
// break ends execution of the switch