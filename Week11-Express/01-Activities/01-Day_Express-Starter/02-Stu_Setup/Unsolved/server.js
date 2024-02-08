const express = require('express');
const path = require('path');

const app = express(); // all modules placed in variable called app
const PORT = 3001;

// TODO: Invoke app.use() and serve static files from the '/public' folder
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) => // request and response
  res.sendFile(path.join(__dirname, 'public/send.html')) // resolve it, if condition is met, otherwise
);

app.get('/paths', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/paths.html'));
});

// TODO: Create a route that will serve up the `public/paths.html` page

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
