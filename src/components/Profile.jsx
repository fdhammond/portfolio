import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Flex, Heading, Icon } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/layout";
import { DiCss3, DiHtml5, DiReact } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "100vh", lg: "100vh", xl: "100vh" }}>
      <Box alignSelf="center" px="8" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          1+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf="center" px={isNotSmallerScreen ? 0 : 32} py="16">
        <Text
          fontWeight="bold"
          fontSize="2xl"
          mt={isNotSmallerScreen ? 0 : -55}>
          Front End Developer, improving my skills as Web Developer everyday.
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end">
            <Icon color="white" p="4" as={DiReact} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              React
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "yellow.300" }}>
            <Icon color="black" p="4" as={SiJavascript} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Javascript
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}>
            <Icon as={DiHtml5} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              HTML
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "cyan.400" }}>
            <Icon as={DiCss3} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              CSS
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;
