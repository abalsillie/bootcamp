DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE fiction (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);

-- need to do SOURCE schema.sql FIRST so that it knows which database to run to
