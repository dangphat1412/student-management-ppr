from typing import Any

class config:
    # DATABASE
    DATABASE_NAME = 'project.db'
    # LOG
    LOG_PATH = 'app.log'

class Student:
    def __init__(self,id,studentcode,firstname,lastname,email,dob,country,score):
        self.id = id
        self.studentcode = studentcode
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.dob = dob
        self.country = country
        self.score = score

    @property
    def id(self) -> str:
        return self.id

    @id.setter
    def id(self, id):
        self.id = id

    @property
    def studentcode(self) -> str:
        return self.studentcode
    
    @studentcode.setter
    def studentcode(self, student_code):
        self.studentcode = student_code
    
    @property
    def firstname(self) -> str:
        return self.firstname
    
    @firstname.setter
    def firstname(self, firstname):
        self.firstname = firstname

    @property
    def lastname(self) -> str:
        return self.lastname
    
    @lastname.setter
    def lastname(self, lastname):
        self.lastname = lastname
    
    @property
    def email(self) -> str:
        return self.email
    
    @email.setter
    def email(self, email):
        self.email = email

    @property
    def dob(self) -> str:
        return self.dob
    
    @dob.setter
    def dob(self, dob):
        self.dob = dob
    
    @property
    def country(self) -> str:
        return self.country
    
    @country.setter
    def country(self, country):
        self.country = country
    
    @property
    def score(self) -> str:
        return self.score
    
    @score.setter
    def score(self, score):
        self.score = score
