DROP TABLE IF EXISTS student;

CREATE TABLE IF NOT EXISTS student (
    id INTEGER AUTOINCREMENT,
    studentcode VARCHAR(255) NOT NULL UNIQUE,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    dob DATE,
    country VARCHAR(255),
    score FLOAT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO student (studentcode,firstname,lastname,email,dob,country,score)   
VALUES 
    ("MSE1","Nguyen Thanh","Binh","binhnguyenthanh@gmail.com","01/01/1998","HaNoi",8.1),
    ("MSE2","Ngo Viet","Hai","haingoviet@gmail.com","02/02/2000","HaNoi",8.2),
    ("MSE3","Ha Hoang","Hieu","hieuhahoang@gmail.com","03/03/1998","HaNoi",8.5);