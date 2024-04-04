const express = require('express');
const db = require('./config/connection'); // connection stored in var db
// TODO: Add a comment describing the functionality of the code below
const { Book } = require('./models'); // importing the book model from the book.js file

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/all-books', async (req, res) => {
  try {
    // TODO: Add a comment describing the functionality of the code below
    const result = await Book.find({}); // finding all of the book documents
    res.status(200).json(result); // returning result
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
