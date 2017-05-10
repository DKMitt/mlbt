CREATE DATABASE msebooks;

USE msebooks;

CREATE TABLE books (
	id INTEGER (11) AUTO_INCREMENT NOT NULL,
    title VARCHAR (255) NOT NULL,
    author VARCHAR (255) NOT NULL,
	edition VARCHAR (11),
    ISBN INTEGER (50),
    publisher VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
    );
    
CREATE TABLE users (
	id INTEGER (11) AUTO_INCREMENT NOT NULL,
    name VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    netID VARCHAR (50) NOT NULL,
    admin BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
    );