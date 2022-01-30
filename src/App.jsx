import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";
import { Flex, Heading, VStack, Spacer, Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          <Image
            src="https://res.cloudinary.com/dzkqopnby/image/upload/v1643502276/Portfolio/logo_ee6nxr.svg"
            alt="logo"
            width="35px"
            height="35px"
          />
        </Heading>
        <Spacer></Spacer>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
