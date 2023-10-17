import React from "react";
import {
  Box,
  Flex,
  Container,
  IconButton,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

 
  return (
    <Box
      py={10}
      bgGradient="linear(to-b, #FF0000,#90ee90,#FFFF00)"
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          
          <Box>
            <Flex fontSize="20px">
              <IconButton
                aria-label="Toggle Theme"
                icon={colorMode === "light" ? <MoonIcon />   : <SunIcon />  }
                bg="transparent"
                border="none"
                onClick={toggleColorMode}
              />
              {colorMode === "light" ? "Dark Mode"   : "Light Mode"  }
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
