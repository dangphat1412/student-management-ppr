import useData from "./useData";

export interface Student {
  id: number;
  studentNumber: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  birthPlace: string;
  finalScore: number;
}

const useStudents = () => useData<Student>("/students", {}, []);

export default useStudents;
