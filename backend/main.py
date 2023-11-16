import sqlite3
from config import config
from flask import Flask, redirect, url_for, render_template, request
from modify_table import select_all, delete_info, insert_info, modify_info
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
# db = SQLAlchemy(app)

def get_db_connection():
    try:
        conn = sqlite3.connect(config.DATABASE_NAME)
        conn.row_factory = sqlite3.Row
        return conn
    except sqlite3.Error as error:
        print('Error occurred - ', error)

@app.route('/')
def select_all_student():
    conn = get_db_connection()
    cursor = conn.cursor()
    print(type(select_all(cursor, conn)))
    return render_template('homepage.html',students=select_all(cursor, conn))

# export PYTHONPATH="${PYTHONPATH}:/Users/lengoclong/Downloads/PPR501"
if __name__ == '__main__':  
   app.run(debug=True)
