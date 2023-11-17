from typing import Any
import os

class config:
    # DATABASE
    DATABASE_NAME = '/Users/lengoclong/Downloads/FinalProject/student-management-ppr/project.db'
    # LOG
    LOG_PATH = 'app.log'

class Student:
    def __init__(self,student_code,first_name,last_name,student_email,student_dob,student_country,student_score):
        #self._id = student_id
        self._studentcode = student_code
        self._firstname = first_name
        self._lastname = last_name
        self._email = student_email
        self._dob = student_dob
        self._country = student_country
        self._score = student_score

    # @property
    # def id(self) -> str:
    #     return self._id

    # @id.setter
    # def id(self, new_id):
    #     self.id = new_id

    @property
    def studentcode(self) -> str:
        return self._studentcode
    
    @studentcode.setter
    def studentcode(self, new_student_code):
        self._studentcode = new_student_code
    
    @property
    def firstname(self) -> str:
        return self._firstname
    
    @firstname.setter
    def firstname(self, new_first_name):
        self._firstname = new_first_name

    @property
    def lastname(self) -> str:
        return self._lastname
    
    @lastname.setter
    def lastname(self, new_last_name):
        self._lastname = new_last_name
    
    @property
    def email(self) -> str:
        return self._email
    
    @email.setter
    def email(self, new_email):
        self._email = new_email

    @property
    def dob(self) -> str:
        return self._dob
    
    @dob.setter
    def dob(self, new_dob):
        self._dob = new_dob
    
    @property
    def country(self) -> str:
        return self._country
    
    @country.setter
    def country(self, new_country):
        self._country = new_country
    
    @property
    def score(self) -> str:
        return self._score
    
    @score.setter
    def score(self, new_score):
        self._score = new_score

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