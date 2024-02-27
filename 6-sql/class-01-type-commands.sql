 -- DDL
 CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  CPF TEXT NOT NULL UNIQUE,
  age INT
);

DROP TABLE STUDENTS;

-- DML
INSERT INTO students (name, age) 
VALUES
 (136, "dudu", 17),
 (137, "Jonatan", 19);
 

  UPDATE students
SET age = 55
WHERE id = 1; 

DELETE FROM  STUDENTS 
WHERE id >= 136
AND id <= 140;

-- DQL
SELECT * FROM students;
SELECT name, age
FROM students
WHERE id = 7;

SELECT * FROM students 
WHERE ID = 6 OR id = 8;

SELECT * 
FROM students
WHERE age  > 18 
ORDER BY age DESC;

-- DDL
ALTER TABLE students 
ADD column cpf TEXT
NOT NULL DEFAULT "jUCÁS";

ALTER TABLE students 
DROP column city;

ALTER TABLE students
RENAME COLUMN city TO text;


-- CHALLENGE DML
 UPDATE students
 SET city = "Jucás";

 UPDATE students
 SET city = "Saboeiro"
 WHERE id = 6;
 








