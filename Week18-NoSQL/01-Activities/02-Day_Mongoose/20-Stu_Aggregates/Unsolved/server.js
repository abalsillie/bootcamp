const express = require('express');
const db = require('./config/connection');

const { Book } = require('./models'); // bring in book from models folder

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/all-books', async (req, res) => {
  try {
    const result = await Book.find({}); // find all books
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/sum-price', async (req, res) => {
  try {
    const result = await Book
      .aggregate([
        // match condition where in stock is true
        {$match: { inStock: true }}, // group 1
        {
          $group: { // group 2
            _id: null,
            sum_price: { $sum: '$price' },
            avg_price: { $avg: '$price' },
            max_price: { $max: '$price' },
            min_price: { $min: '$price' },
          },
        },
      ]);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
