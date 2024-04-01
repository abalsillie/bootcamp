const arrayIndex = [1, 52, 35, 6, 72, 7, 3, 19, 32, 54, 78, 95, 97];

function evenIndexMultiplier(number, index) { // func takes in number and index parametres
  if (index % 2 === 0) { // if remainder = 0 when divided by 2 therefore even
    return number * 10; // return this number x 10
  }
  return number; // else if odd, return that number
}

const evenIndexes = arrayIndex.map(evenIndexMultiplier); // pass array through .map method, store in variable, only even indecies

console.log(evenIndexes); // log the new array

// [
//   10, 52, 350,   6, 720,
//    7, 30,  19, 320,  54,
//  780, 95, 970
// ]
