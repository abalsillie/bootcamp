// 1. Using arrays
const songs = ['Bad Guy', 'The Wheels on the Bus', 'Friday'];

// an alternative for loop is a for of loop
for (const song of songs) {
  console.log(song);
}

// same way of writing
for (let i=0; i < songs.length; i++) {
  console.log(songs[i]);
}

// typically use singular form of plural e.g. song of songs
// song is the first variable in the songs string

/* Output:
  Bad Guy
  The Wheels on the Bus
  Friday
*/

console.log('\n================================================\n');

// 2. Using multidimensional arrays
const moreSongs = [
  ['Bad Guy', 1],
  ['The Wheels on the Bus', 2],
  ['Friday', 3],
];
// an array of arrays

// for of loop
for (const song of moreSongs) {
  console.log(`${song[0]}'s chart position is ${song[1]}`);
}
// song is in an array, therefore have to define position i.e. 0/ 1

/* Output:
  Bad Guy's chart position is 1
  The Wheels on the Bus's chart position is 2
  Friday's chart position is 3
*/
