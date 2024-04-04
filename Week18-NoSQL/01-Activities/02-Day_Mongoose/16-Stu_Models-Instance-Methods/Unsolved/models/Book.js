const mongoose = require('mongoose');
// schema needs to be defined in models folder

// TODO: Define a new schema named `bookSchema`
// new schema has three properties: `title`, `author`, and `price`
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: String,
    price: Number,
});

// TODO: Create a custom instance method named `getDiscount`
// don't use arrow function because 'this' won't work correctly
bookSchema.methods.getDiscount = function () {
    // reduces the price by 50 percent
    const discountPrice = this.price * 0.5; // 'this' refers to number of price var in bookSchema
    // console logs the title of the book and the reduced price
    console.log(
        `This book's title is ${this.title} and the price is ${this.discountPrice}`
    );
};

// TODO: Create a model named `Book`
// named `discountedBook`
const Book = mongoose.model('Book', bookSchema); // create model, connect the model and the schema

// TODO: Create a new instance of the model
const discountedBook = new Book({ title: 'A', author: 'B', price: 10 });

// TODO: Call the custom instance method on the instance
// custom instance method = getDiscount, specific instance = discountedBook, therefore...
discountedBook.getDiscount();

module.exports = Book;
