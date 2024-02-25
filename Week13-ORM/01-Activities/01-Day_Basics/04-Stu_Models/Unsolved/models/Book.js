const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // connection coming from config connection file

class Book extends Model {}

Book.init(
  {
    book_id: {
      type: DataTypes.INTEGER, // define type as integar
      primaryKey: true, // creates as primary key
      autoIncrement: true // auto increment
    },
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    isbn: {
      type: DataTypes.STRING
    },
    pages: {
      type: DataTypes.INTEGER
    },
    edition: {
      type: DataTypes.INTEGER
    },
    is_paperback: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'book'
  }
);
 
module.exports = Book;
