import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Student, studentService } from "../services/student-service";

interface Props {
  selectedStudent: Student;
  isOpenConfirm: boolean;
  onCloseConfirm: () => void;
}

const ConfirmBox = ({
  isOpenConfirm,
  onCloseConfirm,
  selectedStudent,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const cancelRef = useRef(null);
  const handleDelete = async (studentId: number) => {
    try {
      setLoading(true);
      await studentService.deleteStudent(studentId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrorMessage(error.message)
    } finally {
      setLoading(true);
      onCloseConfirm();
    }
  };

  return (
    <AlertDialog
      isOpen={isOpenConfirm}
      leastDestructiveRef={cancelRef}
      onClose={onCloseConfirm}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Student
          </AlertDialogHeader>

          <AlertDialogBody>Are you sure to delete Student?</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onCloseConfirm}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={() => handleDelete(selectedStudent.id)}
              ml={3}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ConfirmBox;
