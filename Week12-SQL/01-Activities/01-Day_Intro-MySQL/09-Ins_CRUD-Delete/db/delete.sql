DELETE FROM produce
WHERE id = 2;

SHOW DATABASES;
USE inv_db;
SHOW TABLES;
DESCRIBE produce;
SELECT * FROM produce; -- should return all 3 rows
DELETE FROM produce WHERE id = 2;
SELECT * FROM produce; -- should return only row 1 and 3 now
