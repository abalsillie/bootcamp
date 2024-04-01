const grades = [56, 78, 99, 85];

// accumulator, currentValue, index, array
// 0, 56, 0, []
// 56, 78, 1, []
// 134, 99, 2, []

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    if (index === array.length - 1) { // index starts from 0 so needs to deduct 1
        return (accumulator + currentValue) / array.length; // adds current value to the accumulation of other values and divides by array length
    } // will return the average
    return accumulator + currentValue; // else, just return the sum
}

// TODO: Pass the 'findAverage' into the reduce method.
// reduce function walks through findAverage and reduces into single number
let gradeAverage = grades.reduce(findAverage);

// in this case, the average number, a single value
console.log(gradeAverage);

// 79.5