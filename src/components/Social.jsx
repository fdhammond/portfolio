import { HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconButton } from "@chakra-ui/button";

const Social = () => {
  const redirectUrl = (url) => {
    window.open(url);
  };
  return (
    <HStack spacing="24">
      <IconButton
        icon={<FaLinkedin fontSize={50} />}
        isRound="true"
        _hover={{ bg: "cyan.500" }}
        w="75px"
        h="75px"
        onClick={() =>
          redirectUrl("https://www.linkedin.com/in/federico-hammond-1752a1128")
        }></IconButton>
      <IconButton
        icon={<FaGithub fontSize={50} />}
        isRound="true"
        w="75px"
        h="75px"
        _hover={{ bg: "cyan.500" }}
        onClick={() =>
          redirectUrl("https://github.com/fdhammond")
        }></IconButton>
    </HStack>
  );
};

export default Social;
