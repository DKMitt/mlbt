CREATE DATABASE msebooks;

USE msebooks;

CREATE TABLE books (
    id INTEGER (11) AUTO_INCREMENT NOT NULL,
    title VARCHAR (255) NOT NULL,
    author VARCHAR (255) NOT NULL,
    edition VARCHAR (11),
    ISBN VARCHAR (50),
    publisher VARCHAR (255) NOT NULL,
    status BOOLEAN DEFAULT true,
    from_date DATE,
    to_date DATE,
    PRIMARY KEY (id)
    );
    
CREATE TABLE users (
    id INTEGER (11) AUTO_INCREMENT NOT NULL,
    name VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    netID VARCHAR (50) NOT NULL,
    admin BOOLEAN DEFAULT false,
    from_date DATE,
    to_date DATE,
    PRIMARY KEY (id)
    );
<<<<<<< HEAD

CREATE TABLE checkout (
    id INTEGER (11) AUTO_INCREMENT NOT NULL,
    user_id INTEGER (11) NOT NULL,
    book_id INTEGER (11) NOT NULL,
    status BOOLEAN DEFAULT true,
    from_date DATE,
    to_date DATE,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
    );
=======
>>>>>>> jeannine
