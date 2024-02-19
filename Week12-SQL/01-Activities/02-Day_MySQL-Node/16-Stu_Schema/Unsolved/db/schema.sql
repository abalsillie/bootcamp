-- Write your schema here --
DROP DATABASE IF EXISTS schema_db;
CREATE DATABASE schema_db;

USE schema_db;

CREATE TABLE products (
  id INT,
  product_name VARCHAR(30),
  category_name VARCHAR(100),
  price INT,
  instock BOOLEAN
);

CREATE TABLE categories (
  id INT,
  category_name VARCHAR(100)
);