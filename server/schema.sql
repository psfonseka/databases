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




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

