import { Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Text
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      fontSize="6xl"
      fontWeight="extrabold"
      marginLeft={10}
      marginRight={10}
    >
      Student Management System
    </Text>
  );
};

export default NavBar;
