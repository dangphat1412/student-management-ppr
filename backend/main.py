import sqlite3
from config import config
from flask import Flask, jsonify, request, render_template
from modify_table import select_all, delete_info, insert_info, modify_info


app = Flask(__name__)

def get_db_connection():
    try:
        conn = sqlite3.connect(config.DATABASE_NAME)
        conn.row_factory = sqlite3.Row
        return conn
    except sqlite3.Error as error:
        print('Error occurred - ', error)

@app.route('/home')
def select_all_student():
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
    print(list_all)
    return render_template('homepage.html', data=list_all)

if __name__ == '__main__':  
   app.run(debug=True, port=5001)
