DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

USE customer_db;

-- values in the `id`, `first_name`, and `last_name` columns cannot be `NULL`

CREATE TABLE customers (
  id INT NOT NULL,
  first_name VARCHAR(15) NOT NULL,
  last_name VARCHAR(15) NOT NULL,
  value_card_member INT
);
