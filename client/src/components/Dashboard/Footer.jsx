import React from "react";
import { Box, Link, Flex, Icon } from "@chakra-ui/react";
import { RiFacebookBoxFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {

  return (
    <Box bg="black" py={4}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="container.lg"
        mx="auto"
        px={4}
      >
        
        <Flex alignItems="center">
          <Link mx={2} fontSize="sm" color="white">
            Privacy Policy
          </Link>
          <Link mx={2} fontSize="sm" color="white">
            Terms of Service
          </Link>
          <Box mx={2}>
            <Icon as={RiFacebookBoxFill} boxSize={5} color="white" />
          </Box>
          <Box mx={2}>
            <Icon as={RiTwitterFill} boxSize={5} color="white" />
          </Box>
          <Box mx={2}>
            <Icon as={RiInstagramFill} boxSize={5} color="white" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
