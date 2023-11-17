DROP TABLE IF EXISTS student;

CREATE TABLE IF NOT EXISTS student (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    studentcode VARCHAR(255) NOT NULL UNIQUE,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    dob DATETIME,
    country VARCHAR(255),
    score FLOAT NOT NULL
);

INSERT INTO student (studentcode,firstname,lastname,email,dob,country,score)   
VALUES 
    ("MSE1","Nguyen Thanh","Binh","binhnguyenthanh@gmail.com","1998-01-01","HaNoi",8.1),
    ("MSE2","Ngo Viet","Hai","haingoviet@gmail.com","2000-02-02","HaNoi",8.2),
    ("MSE3","Ha Hoang","Hieu","hieuhahoang@gmail.com","1998-03-03","HaNoi",8.5);