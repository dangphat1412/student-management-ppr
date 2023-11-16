import { Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    // <Text
    //   bgGradient="linear(to-l, #7928CA, #FF0080)"
    //   bgClip="text"
    //   fontSize="6xl"
    //   fontWeight="extrabold"
    //   marginLeft={10}
    //   marginRight={10}
    // >
    //   Student Management System
    // </Text>
    <Text
      backgroundColor={"#0093E9"}
      backgroundImage={
        "radial-gradient( circle 815px at 23.4% -21.8%,  rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2% )"
      }
      fontSize="6xl"
      color={"white"}
      fontWeight="extrabold"
      paddingLeft={10}
      paddingRight={10}
      marginBottom={5}
    >
      Student Management System
    </Text>
  );
};

export default NavBar;
