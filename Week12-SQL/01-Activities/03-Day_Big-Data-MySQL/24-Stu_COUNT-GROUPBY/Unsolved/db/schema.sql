DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE favorite_books (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  section INT NOT NULL,
  book_name VARCHAR(30) NOT NULL,
  in_stock BOOLEAN,
  quantity INT NOT NULL
);

-- input into terminal...
-- navigate to file path
-- enter mysql -u root -p
-- SOURCE db/schema.sql; -- defines the database, enter this one first
-- SOURCE db/seeds.sql; -- populates the db defined in schema with data
-- SELECT * FROM courses; -- will show courses table with these columns as per above

-- SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock;