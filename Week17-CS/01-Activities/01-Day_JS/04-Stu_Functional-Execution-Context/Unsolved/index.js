// returns the average value of an array of numbers
function avg(array) {
  function sum() {
    let total = 0; // start at zero
    for(let i = 0; i < array.length; i++) {
      total += array[i]; // add the array length to the total of zero, to get the array length
    }
    return total;
  }  
  return sum()/array.length; // divide total by 
}

module.exports = avg;
