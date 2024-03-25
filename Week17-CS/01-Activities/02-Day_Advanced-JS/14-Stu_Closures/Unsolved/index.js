// TODO: Complete the 'counter' function below.
function counter() {
    let count = 0;
    return {
        increment() { // increment is accessing counter's variable
            return ++count;
        }
    }
}

module.exports = counter;
