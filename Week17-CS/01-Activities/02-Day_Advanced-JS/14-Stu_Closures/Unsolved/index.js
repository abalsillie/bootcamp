// TODO: Complete the 'counter' function below.
function counter() {
    let count = 0; // count starts at zero
    return {
        increment() { // increment is accessing counter's variable
            return ++count; // returns count +1 as an increment
        }
    }
}

module.exports = counter;
