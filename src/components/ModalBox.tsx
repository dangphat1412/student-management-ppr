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
import { useRef } from "react";

interface Props {
  action: string,
  selectedStudent: number,
  isOpenModal: boolean;
  onCloseModal: () => void;
}

const ModalBox = ({ isOpenModal, onCloseModal, action, selectedStudent }: Props) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const student = {
    studentNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    birthPlace: '',
    finalScore: '',
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
        <ModalHeader>{action == 'create' ? "Create new student" : "Edit student"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Student number</FormLabel>
            <Input ref={initialRef} placeholder="Student number" value={student.studentNumber} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" value={student.firstName} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Last name" value={student.lastName} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Email" value={student.email} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Date of birth</FormLabel>
            <Input type="date" placeholder="Date of birth" value={student.dateOfBirth} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Birthplace</FormLabel>
            <Input placeholder="Birthplace" value={student.birthPlace} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Final score</FormLabel>
            <Input placeholder="Final score" value={student.finalScore} />
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
