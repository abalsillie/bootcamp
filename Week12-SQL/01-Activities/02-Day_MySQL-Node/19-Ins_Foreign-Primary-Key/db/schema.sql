DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

CREATE TABLE instructors (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id) -- set ID as primary key, must be unique, will not allow a repeat of input
);

CREATE TABLE courses (
  id INT,
  course_title VARCHAR(30) NOT NULL,
  instructor_id INT,
  order_details TEXT,
  FOREIGN KEY (instructor_id) -- instructor ID is a foreign key from instructor table
  REFERENCES instructors(id) -- reference table name (instructor) and the column (id)
  ON DELETE SET NULL -- if instructor is deleted in instructors table, set instructor_id column to null
);
