import json
import sqlite3
from config import config, Student, APIException
from flask import Flask, jsonify, request, render_template
from modify_table import select_all, delete_info, insert_info, modify_info, select_student_by_id, check_student_code
from flask_cors import CORS
from input_validation import check_email, check_null, check_score

app = Flask(__name__)
CORS(app)

def get_db_connection():
    try:
        conn = sqlite3.connect(config.DATABASE_NAME)
        conn.row_factory = sqlite3.Row
        return conn
    except sqlite3.Error as error:
        print('Error occurred - ', error)

# done
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
        
    except:
        raise APIException('Erorr when list all', 400)

# done          
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
        
    except:
        raise APIException('Error when select student', 400)
        
# done
@app.route('/api/students/add', methods=['POST'])
def add_student():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # get data
        data = request.get_json()
        print(data)
        print(data['student']['studentcode'])

        # check student code is null or invalid or not exists
        if (check_null(data['student']['studentcode']) == True) \
            or (check_student_code(cursor, conn, data['student']['studentcode']) == True):
            message = "Student Code is not valid or existed"
            return jsonify({'message': message}), 400
        
        # check first name
        elif check_null(data['student']['firstname']) is True:
            message = "First name is not valid"
            return jsonify({'message': message}), 400
        
        # check last name
        elif check_null(data['student']['lastname']) is True:
            message = "Last name is not valid"
            return jsonify({'message': message}), 400

        # check email
        elif (check_null(data['student']['email']) is True) or (check_email(data['student']['email']) is False):
            message = "Email is not valid"
            return jsonify({'message': message}), 400

        # check country
        elif check_null(data['student']['country']) is True:
            message = "Country is not valid"
            return jsonify({'message': message}), 400

        elif check_score(data['student']['score']) is False:
            message = "Score is not valid"
            return jsonify({'message': message}), 400

        else:
            # add new student
            new_student = Student(
                data['student']['studentcode'],
                data['student']['firstname'],
                data['student']['lastname'],
                data['student']['email'],
                data['student']['dob'],
                data['student']['country'],
                data['student']['score']
            )
        
            # add to database
            insert_info(cursor,
                        conn,
                        new_student.studentcode,
                        new_student.firstname,
                        new_student.lastname,
                        new_student.email,
                        new_student.dob,
                        new_student.country,
                        new_student.score)

            message = "Created sucessfully"
            
            return jsonify({'message': message}), 201

    except sqlite3.Error as error:
        print('Error occurred - ', error)
        return json.dumps(error)    

# error : not update to db
@app.route('/api/students/update/<id>', methods=['PUT'])
def update_student(id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # get data
        data = request.get_json()

        # check student code is null or invalid or exists
        if (check_null(data['student']['studentcode']) == True) \
            or (check_student_code(cursor, conn, data['student']['studentcode']) == False):
            message = "Student Code is not valid"
            return jsonify({'message': message}), 400
        
        # check first name
        elif check_null(data['student']['firstname']) is True:
            message = "First name is not valid"
            return jsonify({'message': message}), 400
        
        # check last name
        elif check_null(data['student']['lastname']) is True:
            message = "Last name is not valid"
            return jsonify({'message': message}), 400

        # check email
        elif (check_null(data['student']['email']) is True) or (check_email(data['student']['email']) is False):
            message = "Email is not valid"
            return jsonify({'message': message}), 400

        # check country
        elif check_null(data['student']['country']) is True:
            message = "Country is not valid"
            return jsonify({'message': message}), 400

        elif check_score(data['student']['score']) is False:
            message = "Score is not valid"
            return jsonify({'message': message}), 400

        else:
            # add new student
            
            new_student = Student(
                data['student']['studentcode'],
                data['student']['firstname'],
                data['student']['lastname'],
                data['student']['email'],
                data['student']['dob'],
                data['student']['country'],
                data['student']['score']
            )

            # modify to database
            modify_info(cursor, 
                        conn,
                        new_student.studentcode,
                        new_student.firstname,
                        new_student.lastname,
                        new_student.email,
                        new_student.dob,
                        new_student.country,
                        new_student.score)

            message = "Updated sucessfully"
            
            return jsonify({'message': message}), 201

    except:
        raise APIException('Error when delete', 400)

# done
@app.route('/api/students/delete/<id>', methods=['DELETE'])
def delete_student(id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        delete_info(cursor, conn, id)
        
        message = "Deleted sucessfully"
        return jsonify({'message': message}), 204

    except:
        raise APIException('Error when delete', 400)

@app.errorhandler(APIException)
def handle_api_exception(e):
    return jsonify({'message': e.message}), e.status_code

if __name__ == '__main__':
   app.run(debug=True)