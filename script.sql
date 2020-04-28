CREATE USER nayan IDENTIFIED BY "Nayan@10";
GRANT ALL PRIVILEGES ON *.* TO nayan;
FLUSH PRIVILEGES;

CREATE DATABASE IF NOT EXISTS crud_db;

USE crud_db;


CREATE TABLE IF NOT EXISTS user_detail ( id INT AUTO_INCREMENT PRIMARY KEY, name CHAR(30) NOT NULL, age INT NOT NULL, department CHAR(25) NOT NULL, subject CHAR(50) );


INSERT INTO user_detail VALUES (1, "Tony Stark", 25, "Computer Science", "CS ENGG");
INSERT INTO user_detail VALUES (2, "Steve Rogers", 26, "Physical Education", "PE");
INSERT INTO user_detail VALUES (3, "Natasha Romanoff", 27, "Computer Science", "CS");
INSERT INTO user_detail VALUES (4, "Carol Danvers", 28, "Computer Science", "CS");
INSERT INTO user_detail VALUES (5, "Thor Odinson", 29, "Computer Science", "CS");
INSERT INTO user_detail VALUES (6, "Bruce Banner", 30, "Computer Science", "CS");
INSERT INTO user_detail VALUES (7, "Wanda Maximoff", 31, "Computer Science", "CS");
INSERT INTO user_detail VALUES (8, "Luke Charles", 32, "Computer Science", "CS");
INSERT INTO user_detail VALUES (9, "Samuel Wilson", 33, "Computer Science", "CS");
INSERT INTO user_detail VALUES (10, "Clinton Barton", 34, "Computer Science", "CS");

