DROP DATABASE IF EXISTS books_db; -- delete table if doesn't exist
CREATE DATABASE books_db; -- create

USE books_db;

CREATE TABLE biographies (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);

