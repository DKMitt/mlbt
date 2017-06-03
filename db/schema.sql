CREATE DATABASE msebooks;
USE msebooks;
CREATE TABLE books (
id INTEGER (11) AUTO_INCREMENT NOT NULL,
title VARCHAR (255) NOT NULL,
author VARCHAR (255) NOT NULL,
edition VARCHAR (11),
ISBN VARCHAR (50),
publisher VARCHAR (255) NOT NULL,
available BOOLEAN DEFAULT true,
PRIMARY KEY (id)
);

CREATE TABLE checkout (
id INTEGER (11) AUTO_INCREMENT NOT NULL,
name VARCHAR (255) NOT NULL,
email VARCHAR (255) NOT NULL,
netID VARCHAR (50) NOT NULL,
book_id INTEGER (11) NOT NULL,
checkout_date VARCHAR (11),
due_date VARCHAR (11),
PRIMARY KEY (id),
FOREIGN KEY (book_id) REFERENCES books(id)
);


# pulling the book into a scroll to pick -------k------- that way it would match the book id
-- CREATE TABLE checkout (
--     id INTEGER (11) AUTO_INCREMENT NOT NULL,
--     book_id INTEGER (11) NOT NULL,
--     netID VARCHAR (50) NOT NULL,
--     checkout_date VARCHAR,
--     due_date VARCHAR,
--     PRIMARY KEY (id),
--     FOREIGN KEY (user_id) REFERENCES users(id),
--     FOREIGN KEY (book_id) REFERENCES books(id)
--     );
/*CREATE TABLE requests (
id INTEGER (11) AUTO_INCREMENT NOT NULL,
user_id INTEGER (11)
)