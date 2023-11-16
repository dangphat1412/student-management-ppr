import { useEffect, useState } from "react";
import { Student, studentService } from "../services/student-service";
import {
  Alert,
  AlertIcon,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

interface Props {
  selectedStudent: Student;
  isOpenModal: boolean;
  onCloseModal: () => void;
}

const StudentInfo = ({ isOpenModal, onCloseModal, selectedStudent }: Props) => {
  const [student, setStudent] = useState<Student | null>(null);
  const [error, setError] = useState();

  const getStudentInfo = async (studentId: number) => {
    try {
      const response = await studentService.getStudentById(studentId);
      setStudent(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (selectedStudent.id <= 0) {
      return;
    }
    getStudentInfo(selectedStudent.id);
  }, [selectedStudent]);

  return (
    <Modal isOpen={isOpenModal} onClose={onCloseModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Student Detail</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <HStack>
            <Text width={"150px"} as="b">
              Student code:{" "}
            </Text>
            <Text>{student?.studentcode}</Text>
          </HStack>
          <HStack>
            <Text width={"150px"} as="b">
              First name:{" "}
            </Text>
            <Text>{student?.firstname}</Text>
          </HStack>
          <HStack>
            <Text width={"150px"} as="b">
              Last name:{" "}
            </Text>
            <Text>{student?.lastname}</Text>
          </HStack>
          <HStack>
            <Text width={"150px"} as="b">
              Email:{" "}
            </Text>
            <Text>{student?.email}</Text>
          </HStack>
          <HStack>
            <Text width={"150px"} as="b">
              Date of birth:{" "}
            </Text>
            <Text>{student?.dob}</Text>
          </HStack>
          <HStack>
            <Text width={"150px"} as="b">
              Birthplace:{" "}
            </Text>
            <Text>{student?.country}</Text>
          </HStack>
          <HStack>
            <Text width={"150px"} as="b">
              Final score:{" "}
            </Text>
            <Text>{student?.score}</Text>
          </HStack>

          {error && (
            <Alert status="error" marginTop={5}>
              <AlertIcon />
              {error}
            </Alert>
          )}
        </ModalBody>

        <ModalFooter>
          <Button onClick={onCloseModal}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StudentInfo;
