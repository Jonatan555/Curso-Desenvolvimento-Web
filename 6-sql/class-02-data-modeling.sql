CREATE TABLE students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        id_course INTEGER REFERENCES courses(id) on Delete CASCADE
);

DROP TABLE students;

CREATE TABLE courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      workload INTEGER NOT NULL
);

DROP TABLE courses;

INSERT INTO students (name, email, id_course)VALUES
  ("Natan", "natan@gmail.com", 1),
  ("Jonatan","janatan@gmail.com", 2),
  ("Daniel", "daniel@gmail.com", 2);


INSERT INTO courses (name, workload)VALUES
  ("web Development", 360),
  ("Data Analysis", 360),
  ("Cyber Security", 360);

SELECT * FROM students;
SELECT * FROM courses;

SELECT  students.name AS test, courses.name FROM students
INNER JOIN courses
ON students.id_course =courses.id
WHERE course IS NOT NULL;

DELETE FROM students WHERE id = 5; 
DELETE FROM students WHERE id = 2;
