import {
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
import { SetStateAction, useRef } from "react";
import { Student } from "../services/student-service";
import { formatDate } from "../utils/formatDate";

interface Props {
  action: string;
  selectedStudent: Student;
  setSelectedStudent: React.Dispatch<SetStateAction<Student | undefined>>

  isOpenModal: boolean;
  onCloseModal: () => void;
}

const ModalBox = ({
  isOpenModal,
  onCloseModal,
  action,
  selectedStudent,
  setSelectedStudent
}: Props) => {
  console.log(selectedStudent);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
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
              value={selectedStudent?.studentcode}
              onChange={(e) =>
                setSelectedStudent({ ...selectedStudent, studentcode: e.target.value })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="First name"
              value={selectedStudent?.firstname}
              onChange={(e) =>
                setSelectedStudent({ ...selectedStudent, firstname: e.target.value })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Last name</FormLabel>
            <Input
              placeholder="Last name"
              value={selectedStudent?.lastname}
              onChange={(e) =>
                setSelectedStudent({ ...selectedStudent, lastname: e.target.value })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Email"
              value={selectedStudent?.email}
              onChange={(e) =>
                setSelectedStudent({ ...selectedStudent, email: e.target.value })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Date of birth</FormLabel>
            <Input
              type="date"
              placeholder="Date of birth"
              value={selectedStudent?.dob}
              onChange={(e) => setSelectedStudent({ ...selectedStudent, dob: e.target.value })}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Birthplace</FormLabel>
            <Input
              placeholder="Birthplace"
              value={selectedStudent?.country}
              onChange={(e) =>
                setSelectedStudent({ ...selectedStudent, country: e.target.value })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Final score</FormLabel>
            <Input
              placeholder="Final score"
              value={selectedStudent?.score}
              onChange={(e) =>
                setSelectedStudent({ ...selectedStudent, score: e.target.value })
              }
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            {action == "create" ? "Save" : "Update"}
          </Button>
          <Button onClick={onCloseModal}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalBox;
