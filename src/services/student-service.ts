import axios from "./api-client";

export interface Student {
  id: number;
  studentcode: string;
  firstname: string;
  lastname: string;
  email: string;
  dob: string;
  country: string;
  score: string;
}

class StudentService {
  async getAllStudents() {
    const respone = await axios.get("/students");
    return respone;
  }

  async getStudentById(studentId: number) {
    const respone = await axios.get(`/students/${studentId}`);
    return respone;
  }

  async addStudent(student: Student) {
    const respone = await axios.post(`/students/add`, { student });
    return respone;
  }

  async updateStudent(student: Student) {
    const respone = await axios.put(`/students/update/${student.id}`, {
      student,
    });
    return respone;
  }

  async deleteStudent(studentId: number) {
    const respone = await axios.delete(`/students/delete/${studentId}`);
    return respone;
  }
}

export const studentService = new StudentService();
