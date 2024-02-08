// TODO: Import express
const express = require('express');

const termData = require('./terms.json'); // json method

// TODO: Import 'terms.json' file
const PORT = 3001;

// TODO: Initialize app variable
const app = express();

app.get('/', (req, res) => res.send("this is a text"));

// TODO: Create a route for a GET request that will return the content of our `terms.json` file

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

// run node server.js