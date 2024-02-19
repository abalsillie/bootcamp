-- new database `books` created
DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;
USE books_db;

-- adds biography table
CREATE TABLE biographies (
    -- includes two columns `id` and `name`
    -- `id` column has a data type of `INT`
    -- `name` column has a data type of `VARCHAR(100)`
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);

-- show all databases
SHOW DATABASES;

-- show tables in books database
SHOW TABLES;

-- shows columns created and the field types
DESCRIBE biographies;
