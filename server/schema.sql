CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  MessageID int NOT NULL AUTO_INCREMENT,
  UserName varchar(50) NOT NULL,
  RoomName varchar(50) NOT NULL,
  MessageText varchar(255) NOT NULL,
  PRIMARY KEY (MessageID)
);

/* Create other tables and define schemas for them here! */
INSERT INTO messages
VALUES (1, 'Anonymous', 'Lobby', 'This is the first message!');



/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/

