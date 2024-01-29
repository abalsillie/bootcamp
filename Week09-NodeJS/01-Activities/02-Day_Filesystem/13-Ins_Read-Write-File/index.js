// fs is a Node standard library package for reading and writing files
const fs = require('fs'); // grab fs package and input into fs object

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile('data.csv', 'utf8', (error, data) => // readFile is a function, takes in 3 parametres, utf8 is coding, 3rd is callback, arrow function
  error ? console.error(error) : console.log(data) // console.error is same as console.log but for error
); // reads the data, no error, prints out the data

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

fs.writeFile('log.txt', process.argv[2], (err) => // takes in 3 arguments/ parametres
  err ? console.error(err) : console.log('Success!') // log err if there is an error
); // reads the data, no error, prints out 'success'
