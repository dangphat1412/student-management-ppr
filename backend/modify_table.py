from config import config
import sqlite3

# return True: insert/add successfully
# return False: student info already exists
# return None: error
def insert_info(cursor, conn, student_code,firstname,lastname,email,dob,country,score):
    try:
        # check student code
        student = check_student_code_result(cursor, conn, student_code)  

        if student is not None:          
            return False
        else:
            query_insert = "INSERT INTO student (studentcode,firstname,lastname,email,dob,country,score)\
                            VALUES (?,?,?,?,?,?,?);"

            cursor.execute(query_insert,(student_code,firstname,lastname,email,dob,country,score)) 
            conn.commit()
        
            return True
        
    except sqlite3.Error as error:
        print('Error occurred - ', error)
        return None
    finally:
        cursor.close()
        conn.close()

# return True: update/modify successfully
# return False: don't have info to update/modify
# return None: error
def modify_info(cursor, conn, studentcode,firstname,lastname,email,dob,country,score):
    try:
        # check student code
        student = check_student_code_result(cursor, conn, studentcode)

        if student is None:
            return False
        else:
            query_modify = "UPDATE student\
                            SET firstname=?, lastname=?, email=?, dob=?, country=?, score=?\
                            WHERE studentcode=?;"
            
            cursor.execute(query_modify,(firstname,lastname,email,dob,country,score,studentcode))     
            conn.commit()

            return True
    except sqlite3.Error as error:
        print('Error occurred - ', error)
        return None
    finally:
        cursor.close()
        conn.close()

# return True: delete successfully
# return False: don't have info to delete
# return None: error
def delete_info(cursor, conn, id):
    try:
        # check student code
        student = select_student_by_id(cursor, conn, id)  
        
        if student is None:
            return False
        else:
            delete_query = "DELETE FROM student\
                            WHERE id=?;"
            cursor.execute(delete_query, (id,))
            conn.commit()

            cursor.close()
            conn.close()

            return True
    except sqlite3.Error as error:
        print('Error occurred - ', error)
        return None    

def select_all(cursor, conn):
    try:
        select_query = "SELECT * FROM student;"
        cursor.execute(select_query)
        conn.commit()
        
        # Fetch all the rows from the result set as a list of tuples.
        result = cursor.fetchall()

        cursor.close()
        conn.close()
        
        return result
    except sqlite3.Error as error:
        print('Error occurred - ', error)
        return None    

def select_student_by_id(cursor, conn, id):
    try:
        select_query = "SELECT * FROM student\
                        WHERE id=?;"
        cursor.execute(select_query, (id,))
        conn.commit()

        # fetch the first row from the result set as a tuple
        result = cursor.fetchone()

        # cursor.close()
        # conn.close()

        return result
    except sqlite3.Error as error:
        print('Error occurred - ', error)
        return None 

# return True: student_code exists
# return False: student_code doesn't exists
def check_student_code(cursor, conn, student_code):
    try:
        select_query = "SELECT * FROM student\
                        WHERE studentcode=?;"
        cursor.execute(select_query, (student_code,))
        conn.commit()
        result = cursor.fetchone()

        if result is not None:
            return True
        else:
            return False

    except sqlite3.Error as error:
        print('Error occurred - ', error)
        return None
    
def check_student_code_result(cursor, conn, student_code):
    try:
        select_query = "SELECT * FROM student\
                        WHERE studentcode=?;"
        cursor.execute(select_query, (student_code,))
        
        result = cursor.fetchone()

        # cursor.close()
        # conn.close()
        return result

    except sqlite3.Error as error:
        print('Error occurred 1 2 3 - ', error)
        return None

#insert_info("MSE4","Le","Ngoc Long","longlengoc@gmail.com","05/05/1999","Hanoi","8.5")
#modify_info("MSE4","Le Ngoc","Long","longlengoc@gmail.com","05/05/1999","Hanoi",8.7)
#delete_info("MSE4")
# conn = sqlite3.connect(config.DATABASE_NAME)
# cursor = conn.cursor()
# print(select_student_by_id(cursor, conn, "MSE4"))