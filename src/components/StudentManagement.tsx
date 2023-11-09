import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
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
} from "@chakra-ui/react";

const StudentManagement = () => {
  return (
    <Stack marginLeft={10} marginRight={10}>
      <Container maxW="2sm">
        <TableContainer>
          <Table variant="striped">
            <TableCaption textTransform={"uppercase"}>Student List</TableCaption>
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
                    >
                      Edit
                    </Button>
                    <Button
                      rightIcon={<DeleteIcon />}
                      colorScheme="red"
                      variant="outline"
                    >
                      Delete
                    </Button>
                  </Stack>
                </Td>
              </Tr>
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
                    >
                      Edit
                    </Button>
                    <Button
                      rightIcon={<DeleteIcon />}
                      colorScheme="red"
                      variant="outline"
                    >
                      Delete
                    </Button>
                  </Stack>
                </Td>
              </Tr>
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
                    >
                      Edit
                    </Button>
                    <Button
                      rightIcon={<DeleteIcon />}
                      colorScheme="red"
                      variant="outline"
                    >
                      Delete
                    </Button>
                  </Stack>
                </Td>
              </Tr>
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
                    >
                      Edit
                    </Button>
                    <Button
                      rightIcon={<DeleteIcon />}
                      colorScheme="red"
                      variant="outline"
                    >
                      Delete
                    </Button>
                  </Stack>
                </Td>
              </Tr>
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
                    >
                      Edit
                    </Button>
                    <Button
                      rightIcon={<DeleteIcon />}
                      colorScheme="red"
                      variant="outline"
                    >
                      Delete
                    </Button>
                  </Stack>
                </Td>
              </Tr>
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
                  >
                    Create Student
                  </Button>
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Container>
    </Stack>
  );
};

export default StudentManagement;
