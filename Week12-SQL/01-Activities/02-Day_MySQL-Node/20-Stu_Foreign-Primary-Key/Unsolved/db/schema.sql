-- Write your Schema Here -- 
DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

CREATE TABLE customers (
  id INT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id) -- `id` column in the `customers` table is defined as the primary key
);

CREATE TABLE customer_orders (
  id INT,
  customer_id INT,
  order_details TEXT,
  FOREIGN KEY (customer_id)
  REFERENCES customers(id) -- foreign key in the `customer_orders` table refers to the `customers` table primary key
);
