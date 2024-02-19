DROP DATABASE IF EXISTS course_db;
CREATE DATABASE course_db;

USE course_db;

CREATE TABLE courses (
  id INT NOT NULL,
  course_title VARCHAR(30) NOT NULL,
  course_description TEXT NOT NULL,
  active BOOLEAN NOT NULL,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- input into terminal...
-- navigate to file path
-- enter mysql -u root -p
-- SOURCE db/schema.sql; -- defines the database, enter this one first
-- SOURCE db/seeds.sql; -- populates the db defined in schema with data
-- SELECT * FROM courses; -- will show courses table with these columns as per above
