const grades = [56, 78, 99, 85];

// accumulator, currentValue, index, array
// 0, 56, 0, []
// 56, 78, 1, []
// 134, 99, 2, []

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    if (index === array.length - 1) { // index starts from 0 so needs to deduct 1
        return (accumulator + currentValue) / array.length; // adds current value to the accumulation of other values and divides by array length
    }
    return accumulator + currentValue; 
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage);

// reduce function walks through array and reduces into single number
// in this case, the average number, a single value
console.log(gradeAverage);
