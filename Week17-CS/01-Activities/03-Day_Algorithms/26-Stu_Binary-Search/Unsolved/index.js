const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Step 1. Create a function that accepts a sorted array and the element we are searching for.
function binarySearch(array, element) {
  // Step 2. Define two variable which represent the start index and the end index of the given array.
  let start = 0;
  let end = array.length - 1;
  // Step 3. While start index is less than or equal to end index we continue to loop through the given array.
  while (start <= end) { // while length is still positive
    // Step 4. Define a variable which represents the middle index of the given array.
    let mid = Math.floor((start + end) / 2); // math floor rounds down, cut array in 2
    // Step 5. If the given element is at the given array's middle index
    if (array[mid] === element) {
      // return that middle index number
      return mid;
    // Step 6. Else if the given array's middle index less than the given element
    } else if (array[mid] < element) {
      // start index equals the middle index plus one
      start = mid + 1;
      // Step 7. Else update the end index to the middle index minus one.
    } else {
      end = mid - 1;
    }
  } // end
  // Step 8. After exiting the loop return '-1' because the given element was not found.
  return -1;
}

console.log(binarySearch(arr, 7));

module.exports = binarySearch;
