INSERT INTO fiction (id, name)
VALUES
    ( 001, "To Kill a Mockingbird"),
    ( 002, "100 Years of Solitude"),
    ( 003, "War and Peace");

DELETE FROM fiction 
WHERE id != 3; -- where id does not = 3
