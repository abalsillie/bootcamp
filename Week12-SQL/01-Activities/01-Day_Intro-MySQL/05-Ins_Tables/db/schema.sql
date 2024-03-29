DROP DATABASE IF EXISTS inventory_db;
-- Creates the "inventory_db" database --
CREATE DATABASE inventory_db;

-- Makes it so all of the following code will affect inventory_db --
USE inventory_db;

-- Creates the table "produce" within inventory_db --
CREATE TABLE produce (
  -- 1ST COLUMN numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT NOT NULL,
  -- 2ND COLUMN a string column called "name" which cannot contain null --
  name VARCHAR(100) NOT NULL -- 100 max character count
);

SHOW TABLES; -- shows all our existing tables

DESCRIBE produce; -- shows columns
