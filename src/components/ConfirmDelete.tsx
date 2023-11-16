import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Student, studentService } from "../services/student-service";

interface Props {
  selectedStudent: Student;
  isOpenConfirm: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toast: any;
  onCloseConfirm: () => void;
  setIsActionCompleted: Dispatch<SetStateAction<boolean>>;
}

const ConfirmDelete = ({
  isOpenConfirm,
  onCloseConfirm,
  toast,
  selectedStudent,
  setIsActionCompleted,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const cancelRef = useRef(null);
  const handleDelete = async (studentId: number) => {
    try {
      setLoading(true);
      const response = await studentService.deleteStudent(studentId);
      console.log(response);
      
      if (response.status == 204) {
        toast({
          description: response.data.message,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setIsActionCompleted(true);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast({
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
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
              isLoading={loading}
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

export default ConfirmDelete;
