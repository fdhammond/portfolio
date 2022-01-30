import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode } from "@chakra-ui/color-mode";
import { Button, Image } from "@chakra-ui/react";

import React from "react";

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  const mailTo = () => {
    window.open("mailto:federico.hammond8@gmail.com");
  };

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"></Circle>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start">
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="semibold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text">
            Hammond Federico
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Front End Developer - Learning ReactJS, NextJS.
          </Text>
          <Button mt={8} colorScheme="blue" onClick={() => mailTo()}>
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          boxShadow="lg"
          boxSize="300px"
          src="https://avatars.githubusercontent.com/u/35730916?v=4"
        />
      </Flex>
    </Stack>
  );
};

export default Header;
