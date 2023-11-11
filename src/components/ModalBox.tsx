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
  isOpenModal: boolean;
  onCloseModal: () => void;
}

const ModalBox = ({ isOpenModal, onCloseModal }: Props) => {
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
        <ModalHeader>Create new student</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Student number</FormLabel>
            <Input ref={initialRef} placeholder="Student number" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Last name" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Email" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Date of birth</FormLabel>
            <Input type="date" placeholder="Date of birth" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Birthplace</FormLabel>
            <Input placeholder="Birthplace" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Final score</FormLabel>
            <Input placeholder="Final score" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onCloseModal}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalBox;
