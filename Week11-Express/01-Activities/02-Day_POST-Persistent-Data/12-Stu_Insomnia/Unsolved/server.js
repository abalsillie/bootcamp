const express = require('express'); // grabbing express library
// TODO: Require the json file located in `/db`
const db_repo = require('./db/repos.json'); // grabbing json info

// TODO: Create an `app` variable set to the value of `express()`
const app = express(); // create an instant of express server
const PORT = 3001;

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});

// TODO: Create a GET route for `/api` that will return the content of our json file
app.get('/api', (req, res) => res.json(db_repo));

// TODO: Have the app listen on port 3001
app.listen(PORT, () => console.log('Express server'));
