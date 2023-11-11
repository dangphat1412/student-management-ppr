import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  // Spinner,
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
} from "@chakra-ui/react";
import ConfirmBox from "./ConfirmBox";
import ModalBox from "./ModalBox";
// import useStudents from "../hooks/useStudent";

const StudentManagement = () => {
  const {
    isOpen: isOpenModel,
    onOpen: onOpenModel,
    onClose: onCloseModel,
  } = useDisclosure();
  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useDisclosure();

  // const { data, isLoading, error } = useStudents();

  // if (error || !data) return null;

  // if (isLoading) return <Spinner />;

  return (
    <Stack marginLeft={10} marginRight={10}>
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
              <Tr>
                <Td>First name</Td>
                <Td>millimetres (mm)</Td>
                <Td>First name</Td>
                <Td>millimetres (mm)</Td>
                <Td>First name</Td>
                <Td>millimetres (mm)</Td>
                <Td>First name</Td>
                <Td>
                  <Stack direction="row" spacing={4}>
                    <Button
                      leftIcon={<EditIcon />}
                      colorScheme="teal"
                      variant="outline"
                      size={"sm"}
                      onClick={onOpenModel}
                    >
                      Edit
                    </Button>
                    <Button
                      rightIcon={<DeleteIcon />}
                      colorScheme="red"
                      variant="outline"
                      size={"sm"}
                      onClick={onOpenConfirm}
                    >
                      Delete
                    </Button>
                  </Stack>
                </Td>
              </Tr>
              {/* {data.map((student) => (
                <Tr key={student.id}>
                  <Td>{student.studentNumber}</Td>
                  <Td>{student.firstName}</Td>
                  <Td>{student.lastName}</Td>
                  <Td>{student.email}</Td>
                  <Td>{student.dateOfBirth.toUTCString()}</Td>
                  <Td>{student.birthPlace}</Td>
                  <Td>{student.finalScore}</Td>
                  <Td>
                    <Stack direction="row" spacing={4}>
                      <Button
                        leftIcon={<EditIcon />}
                        colorScheme="teal"
                        variant="outline"
                        size={"sm"}
                        onClick={onOpenModel}
                      >
                        Edit
                      </Button>
                      <Button
                        rightIcon={<DeleteIcon />}
                        colorScheme="red"
                        variant="outline"
                        size={"sm"}
                        onClick={onOpenConfirm}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </Td>
                </Tr>
              ))} */}
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
                    onClick={onOpenModel}
                  >
                    Create Student
                  </Button>
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Container>
      <ModalBox isOpenModal={isOpenModel} onCloseModal={onCloseModel} />
      <ConfirmBox
        isOpenConfirm={isOpenConfirm}
        onCloseConfirm={onCloseConfirm}
      />
    </Stack>
  );
};

export default StudentManagement;
