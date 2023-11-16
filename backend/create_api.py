import json
import sqlite3
from config import config, Student, APIException
from flask import Flask, jsonify, request
from modify_table import select_all, delete_info, insert_info, modify_info, select_student_by_id
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_db_connection():
    try:
        conn = sqlite3.connect(config.DATABASE_NAME)
        conn.row_factory = sqlite3.Row
        return conn
    except sqlite3.Error as error:
        print('Error occurred - ', error)


@app.route('/api/students', methods=['GET'])
def list_all_students():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        list_students = select_all(cursor, conn) # return type: list
        
        # empty list
        list_all = []
        for student in list_students:
            # create new dict for each student and add to list
            dict_student = {
                "id": student['id'],
                "studentcode": student['studentcode'],
                "firstname": student['firstname'],
                "lastname": student['lastname'],
                "email": student['email'],
                "dob": student['dob'],
                "country": student['country'],
                "score": student['score']
            }
            list_all.append(dict_student)
        
        return jsonify(list_all), 200

    except sqlite3.Error as error:
        print('Error occurred - ', error)

        response = {
            'data': [],
            'message': str(error)
        }
        return jsonify(response), 500
    
    except:
        raise APIException('Invalid data provided', 400)
        

# can sua
# {student, status, error}    
@app.route('/api/students/<id>', methods=['GET'])
def get_student_by_id(id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        student = select_student_by_id(cursor, conn, id)
        if student is not None:
            dict_student = {
                "id": student['id'],
                "studentcode": student['studentcode'],
                "firstname": student['firstname'],
                "lastname": student['lastname'],
                "email": student['email'],
                "dob": student['dob'],
                "country": student['country'],
                "score": student['score']
            }
            return jsonify(dict_student), 200
        else:
            return jsonify({}), 200
        
    except sqlite3.Error as error:
        print('Error occurred - ', error)

        response = {
            'data': [],
            'message': str(error)
        }
        return jsonify(response), 500
    
    except:
        raise APIException('Invalid data provided', 400)
        
# can sua
# {status, error}
@app.route('/api/students/add', methods=['GET', 'POST'])
def add_student():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # get data from request form
        new_student = Student
        {
            "Student Code": Student.set_studentcode(request.form["studentcode"],),
            "First Name": Student.set_firstname(request.form["firstname"]),
            "Last Name": Student.set_lastname(request.form["lastname"]),
            "Email": Student.set_email(request.form["email"]),
            "DOB": Student.set_dob(request.form["dob"]),
            "Country": Student.set_country(request.form["country"]),
            "Score": Student.set_score(request.form["score"])
        }
        
        insert_info(cursor, conn, 
                    Student.studentcode(), 
                    Student.firstname(),
                    Student.lastname(),
                    Student.email(),
                    Student.dob(),
                    Student.country(),
                    Student.score()
                    )
        
        return json.dumps("Insert sucessfully")

    except sqlite3.Error as error:
        print('Error occurred - ', error)
        return json.dumps(error)    

# can sua
# {status, error}
@app.route('/api/students/update/<student_code>', methods=['PUT'])
def update_student(student_code):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # get data from request form
        new_student = Student
        {
            "Student Code": Student.set_studentcode(student_code),
            "First Name": Student.set_firstname(request.form["firstname"]),
            "Last Name": Student.set_lastname(request.form["lastname"]),
            "Email": Student.set_email(request.form["email"]),
            "DOB": Student.set_dob(request.form["dob"]),
            "Country": Student.set_country(request.form["country"]),
            "Score": Student.set_score(request.form["score"])
        }
        
        modify_info(cursor, conn, 
                    Student.studentcode(), 
                    Student.firstname(),
                    Student.lastname(),
                    Student.email(),
                    Student.dob(),
                    Student.country(),
                    Student.score()
                    )
        
        return json.dumps("Update sucessfully")

    except sqlite3.Error as error:
        print('Error occurred - ', error)
        return json.dumps(error)

# can sua
# {status, error}
@app.route('/deleteStudent/<student_code>', methods=['DELETE'])
def delete_student(student_code):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        delete_info(cursor, conn, student_code)
        
        return json.dumps("Delete sucessfully")


    except sqlite3.Error as error:
        print('Error occurred - ', error)
        return json.dumps(error)

@app.errorhandler(APIException)
def handle_api_exception(e):
    return jsonify({'message': e.message}), e.status_code

if __name__ == '__main__':
   app.run(debug=True)