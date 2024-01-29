// TODO: What are we importing?
// importing fs library into variable
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) => // log.txt = which file we want to append to
// 2nd is the data to be appended
// 3rd is error, callback after appending
  // TODO: Describe how this ternary operator works
  // if error, return error, if not return commit logged
  err ? console.error(err) : console.log('Commit logged!')
);
