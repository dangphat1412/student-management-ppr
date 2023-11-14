import axios from "./api-client";

export interface Student {
  id: number;
  studentcode: number;
  firstname: string;
  lastlame: string;
  email: string;
  dob: Date;
  country: string;
  score: number;
}

class StudentService {
  async getAllStudents() {
    const respone = await axios.get("/");
    return respone;
  }

  async getStudentById(studentId: number) {
    const respone = await axios.get(`/${studentId}`);
    return respone;
  }

  async addStudent(student: Student) {
    const respone = await axios.post(`/add`, { student });
    return respone;
  }

  async updateStudent(studentId: number, student: Student) {
    const respone = await axios.put(`/update/${studentId}`, {
      student,
    });
    return respone;
  }

  async deleteStudent(studentId: number) {
    const respone = await axios.delete(`/delete/${studentId}`);
    return respone;
  }
}

export const studentService = new StudentService();
