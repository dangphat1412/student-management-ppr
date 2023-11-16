import { DeleteIcon, EditIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Container,
  Spinner,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Student, studentService } from "../services/student-service";
import ConfirmDelete from "./ConfirmDelete";
import StudentForm from "./StudentForm";
import StudentInfo from "./StudentInfo";

const StudentManagement = () => {
  const newStudent: Student = {
    id: 0,
    studentcode: "",
    firstname: "",
    lastname: "",
    email: "",
    dob: "",
    country: "",
    score: "",
  };
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student>(newStudent);
  const [action, setAction] = useState("");
  const [isActionCompleted, setIsActionCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    isOpen: isOpenModel,
    onOpen: onOpenModel,
    onClose: onCloseModel,
  } = useDisclosure();
  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure();
  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useDisclosure();
  const toast = useToast();

  const handleCreate = () => {
    setSelectedStudent(newStudent);
    setAction("create");
    onOpenModel();
  };

  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setAction("edit");
    onOpenModel();
  };

  const handleView = (student: Student) => {
    setSelectedStudent(student);
    onOpenInfo();
  };

  const handleDelete = (student: Student) => {
    setSelectedStudent(student);
    onOpenConfirm();
  };

  const getAllStudents = async () => {
    try {
      setLoading(true);
      const response = await studentService.getAllStudents();
      setStudents(response.data);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllStudents();
    setIsActionCompleted(false);
  }, [isActionCompleted]);

  if (loading) return <Spinner />;

  return (
    <Stack marginLeft={10} marginRight={10}>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Container maxW="2sm">
        <TableContainer>
          <Table variant="striped">
            <TableCaption textTransform={"uppercase"}>
              Student List
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Student number</Th>
                <Th>First name</Th>
                <Th>Last name</Th>
                <Th>Email</Th>
                <Th>Date of birth</Th>
                <Th>Birthplace</Th>
                <Th>Final score</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map((student) => (
                <Tr key={student.id}>
                  <Td>{student.studentcode}</Td>
                  <Td>{student.firstname}</Td>
                  <Td>{student.lastname}</Td>
                  <Td>{student.email}</Td>
                  <Td>{student.dob}</Td>
                  <Td>{student.country}</Td>
                  <Td>{student.score}</Td>
                  <Td>
                    <Stack direction="row" spacing={4}>
                      <Button
                        leftIcon={<SearchIcon />}
                        colorScheme="blue"
                        variant="outline"
                        size={"sm"}
                        onClick={() => {
                          handleView(student);
                        }}
                      >
                        View
                      </Button>
                      <Button
                        leftIcon={<EditIcon />}
                        colorScheme="teal"
                        variant="outline"
                        size={"sm"}
                        onClick={() => {
                          handleEdit(student);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        leftIcon={<DeleteIcon />}
                        colorScheme="red"
                        variant="outline"
                        size={"sm"}
                        onClick={() => {
                          handleDelete(student);
                        }}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Th>
                  <Button
                    leftIcon={<EditIcon />}
                    colorScheme="blue"
                    onClick={handleCreate}
                  >
                    Create Student
                  </Button>
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Container>
      <StudentInfo
        isOpenModal={isOpenInfo}
        onCloseModal={onCloseInfo}
        selectedStudent={selectedStudent}
      />
      <StudentForm
        isOpenModal={isOpenModel}
        onCloseModal={onCloseModel}
        toast={toast}
        selectedStudent={selectedStudent}
        action={action}
        setIsActionCompleted = {setIsActionCompleted}
      />
      <ConfirmDelete
        isOpenConfirm={isOpenConfirm}
        onCloseConfirm={onCloseConfirm}
        toast={toast}
        selectedStudent={selectedStudent}
        setIsActionCompleted = {setIsActionCompleted}
      />
    </Stack>
  );
};

export default StudentManagement;
