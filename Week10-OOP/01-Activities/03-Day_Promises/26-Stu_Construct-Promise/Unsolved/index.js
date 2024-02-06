const http = require('http');

// TODO: What does this function return?
const asyncRequest = (url) =>
  new Promise((resolve, reject) => {
    let error;
    let rawData = '';

    // Use the http.get method to send an asynchronous request to an api at the given url.
    // creates a promise object and allows the called to chain .then() and .catch() asynchronously
    http
      .get(url, (res) => { // go to this url and get me the responses
        // Check for an error code (not equal to 200)
        if (res.statusCode !== 200) {
          // Creates an error object representing the failed http request
          error = new Error(`Request Failed.\nStatus Code: ${res.statusCode}`);
          res.resume();
          return;
        }

        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          rawData += chunk;
        });
      })
      .on('error', (e) => {
        reject(e);
      })
      .on('close', () => {
        // The 'close' event fires after the incoming message is completely received. Error will be undefined if the
        // response status code was 200.
        if (error) {
          // TODO: What the following line do?
          // calls reject with an error and passes to the catch block of asyncRequest below
          reject(error);
        } else { // if no error, then resolve and pass to the get block of asyncRequest below
          // TODO: What does the following line do?
          resolve(rawData);
        }
      });
  });

asyncRequest('http://numbersapi.com/random/trivia')
  // TODO: When is the callback function passed to .then() called by the promise?
  .then((data) => console.log(data)) // raw data passed to end block
  // TODO: When is the callback function passed to .catch() called by the promise?
  .catch((error) => console.log(error)); // reject error returned here

