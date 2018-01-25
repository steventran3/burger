CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE 'burger' (
    'id' INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    'burger_name' VARCHAR NOT NULL,
    'devoured' BOOLEAN DEFAULT false 
)


