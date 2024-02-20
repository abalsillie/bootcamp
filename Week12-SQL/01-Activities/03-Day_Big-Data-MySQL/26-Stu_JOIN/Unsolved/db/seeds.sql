INSERT INTO book_prices (price)
VALUES (1),
       (2),
       (5),
       (10),
       (15);

INSERT INTO favorite_books (book_name, in_stock, book_price)
VALUES ("The Great Gatsby", true, 1),
       ("Huckleberry Finn", true, 3),
       ("100 Years of Solitude", false, 5),
       ("Things Fall Apart", false, 1),
       ("Crime and Punishment", true, 2),
       ("Moby Dick", true, 4),
       ("Decameron", false, 1);

-- SELECT * FROM favorite_books a JOIN book_prices b ON a.book_price = b.id;
-- a and b give aliases to the id from both tables because otherwise function will confuse which are which
-- in book_prices, 'price' has a unique id and in favorite_books, each book has a unique id
 