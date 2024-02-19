DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE products(
  id INT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(30) NOT NULL
);

-- input into terminal...
-- navigate to file path
-- enter mysql -u root -p
-- SOURCE db/schema.sql; -- defines the database, enter this one first
-- SOURCE db/seeds.sql; -- populates the db defined in schema with data
-- SELECT * FROM courses; -- will show courses table with these columns as per above

-- ensure that all columns are included in seeds.sql, i.e. id, product name and category
