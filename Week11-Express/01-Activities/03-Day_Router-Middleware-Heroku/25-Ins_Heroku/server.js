const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001; // heroku will say which port to use, run on own computer and server

const app = express();

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
