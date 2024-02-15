INSERT INTO biographies (id, name)
VALUES
    ( 001, "Diary of Anne Frank"),
    ( 002, "Frida: A Biography of Frida Kahlo"),
    ( 003, "Long Walk to Freedom");

SELECT * FROM biographies;

-- must navigate to correct folder outside of mysql, then enter mysql
mysql -u root -produce
SOURCE db/insert-select.sql; -- to run return
