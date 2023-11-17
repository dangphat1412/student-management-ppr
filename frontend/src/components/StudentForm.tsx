import {
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Student, studentService } from "../services/student-service";

interface Props {
  action: string;
  selectedStudent: Student;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toast: any;
  isOpenModal: boolean;
  onCloseModal: () => void;
  setIsActionCompleted: Dispatch<SetStateAction<boolean>>;
}

const StudentForm = ({
  isOpenModal,
  onCloseModal,
  toast,
  action,
  selectedStudent,
  setIsActionCompleted,
}: Props) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [student, setStudent] = useState<Student>(selectedStudent);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStudent(selectedStudent);
    setError(null);
  }, [selectedStudent]);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response =
        action == "edit"
          ? await studentService.updateStudent(student)
          : await studentService.addStudent(student);

      if (response.status == 201) {
        toast({
          position: 'top',
          description: response.data.message,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setIsActionCompleted(true);
        onCloseModal();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error?.response?.data?.message)
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpenModal}
      onClose={onCloseModal}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {action == "create" ? "Create new student" : "Edit student"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Student number</FormLabel>
            <Input
              ref={initialRef}
              placeholder="Student number"
              value={student?.studentcode}
              onChange={(e) =>
                setStudent({
                  ...student,
                  studentcode: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="First name"
              value={student?.firstname}
              onChange={(e) =>
                setStudent({
                  ...student,
                  firstname: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Last name</FormLabel>
            <Input
              placeholder="Last name"
              value={student?.lastname}
              onChange={(e) =>
                setStudent({
                  ...student,
                  lastname: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Email"
              value={student?.email}
              onChange={(e) =>
                setStudent({
                  ...student,
                  email: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Date of birth</FormLabel>
            <Input
              type="date"
              placeholder="Date of birth"
              value={student?.dob}
              onChange={(e) =>
                setStudent({ ...student, dob: e.target.value })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Birthplace</FormLabel>
            <Input
              placeholder="Birthplace"
              value={student?.country}
              onChange={(e) =>
                setStudent({
                  ...student,
                  country: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Final score</FormLabel>
            <Input
              placeholder="Final score"
              value={student?.score}
              onChange={(e) =>
                setStudent({
                  ...student,
                  score: e.target.value,
                })
              }
            />
          </FormControl>
          {error && (
            <Alert status="error" marginTop={5}>
              <AlertIcon />
              {error}
            </Alert>
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            isLoading={loading}
            colorScheme="blue"
            mr={3}
            onClick={handleSubmit}
          >
            {action == "create" ? "Save" : "Update"}
          </Button>
          <Button onClick={onCloseModal}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StudentForm;
