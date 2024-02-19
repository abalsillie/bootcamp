-- firstly, navigate to inv database
USE inv_db
-- produce column
SHOW TABLES;

-- Insert multiple produce items --
INSERT INTO produce (id, name)
VALUES
    ( 1, "apple"),
    ( 2, "orange"),
    ( 3, "banana");
    
-- navigate to table
SELECT * -- * means give me everything
FROM produce;

-- navigate to specific info
SELECT name
FROM produce;

SELECT
id,
name,
FROM produce;
 -- returns specific columns (id, name) from produce table produce
 