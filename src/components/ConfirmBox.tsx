import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  isOpenConfirm: boolean;
  onCloseConfirm: () => void;
}

const ConfirmBox = ({
  isOpenConfirm,
  onCloseConfirm,
}: Props) => {
  const cancelRef = useRef(null);
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

          <AlertDialogBody>
            Are you sure to delete Student?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onCloseConfirm}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={onCloseConfirm} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ConfirmBox;
