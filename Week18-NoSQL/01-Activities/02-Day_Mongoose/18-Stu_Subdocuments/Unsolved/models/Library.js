const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument
// `bookSchema` has two properties: `title` and `price`.
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number,
});

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  // TODO: Add the `books` subdocument to the parent document as an array
  books: [bookSchema], // inside array because one to many relationship (many books to one library), we will input many books into this library
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model('Library', librarySchema);

// TODO: Create a new instance of the model including the subdocuments
// created an array of three books using the `bookSchema`
const booksData = [
  { title: 'A', price: 10 },
  { title: 'B', price: 12 },
  { title: 'C', price: 14 }
]; // passing in more than one, therefore an array (line 13)

// new instance of the `Library` model which includes the `books` subdocument
Library.create({ name: 'State Library', books: booksData });

module.exports = Library;
