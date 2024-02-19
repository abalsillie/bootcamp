DROP DATABASE IF EXISTS course_db;
CREATE DATABASE course_db;

USE course_db;

CREATE TABLE courses (
  id INT NOT NULL, -- number
  course_title VARCHAR(30) NOT NULL, -- variable characters- can be 30 characters
  course_description TEXT NOT NULL, -- text
  active BOOLEAN NOT NULL, -- y or n
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);
