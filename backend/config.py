from typing import Any

class config:
    # DATABASE
    DATABASE_NAME = '/Users/lengoclong/Downloads/FinalProject/student-management-ppr/project.db'
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

class ApiStatus(Student):
    def __init__(self, id, studentcode, firstname, lastname, email, dob, country, score, apistatuscode, apierror):
        super().__init__(id, studentcode, firstname, lastname, email, dob, country, score)

        self.apistatuscode = apistatuscode
        self.apierror = apierror

    @property
    def apistatuscode(self) -> int:
        return int(self.apistatuscode)
    
    @apistatuscode.setter
    def apistatuscode(self, apistatuscode):
        self.apistatuscode = int(apistatuscode)

    @property
    def apierror(self) -> str:
        return self.apierror
    
    @apierror.setter
    def apierror(self, apierror):
        self.apierror = apierror

class APIException(Exception):
    def __init__(self, message, status_code):
        self.message = message
        self.status_code = status_code

    # @property
    # def message(self) -> str:
    #     return self.message
    
    # @message.setter
    # def message(self, message):
    #     self.message = message

    # @property
    # def status_code(self) ->str:
    #     return int(self.status_code)
    
    # @status_code.setter
    # def status_code(self, status_code):
    #     self.status_code = int(status_code)