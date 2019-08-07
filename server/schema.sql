CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  messageID int NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  roomname varchar(50) NOT NULL,
  text varchar(255) NOT NULL,
  PRIMARY KEY (MessageID)
);

CREATE TABLE users (
  username varchar(50) NOT NULL,
  PRIMARY KEY (username)
);

/* Create other tables and define schemas for them here! */
INSERT INTO messages
VALUES (-1, 'Anonymous', 'lobby', 'This is the first message!');

INSERT INTO messages
VALUES (0, 'Anonymous', 'lobby', 'This is the second message!');

INSERT INTO users
VALUES ('Anonymous');




/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/

