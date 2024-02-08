// ctrl c to stop the server
const express = require('express');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

// GET route to get all of the terms
app.get('/api/terms', (req, res) => res.json(termData));

// GET route that returns any specific term
app.get('/api/terms/:term', (req, res) => { // term is a type of specific value through terms object
  // Coerce the specific search term to lowercase
  const requestedTerm = req.params.term.toLowerCase(); // put into requestedTerm variable

  // Iterate through the terms name to check if it matches `req.params.term`
  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) { // convert term data to lowercase
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No match found'); // otherwise, return message
});

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (req, res) =>
  res.send(
    `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
  )
);

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);
