import React from 'react';
import { Box, useDisclosure, Flex, Heading } from '@chakra-ui/core';
import { FaBars } from 'react-icons/fa';
import FinRecDrawer from './FinRecDrawer.jsx';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      paddingBottom="10rem"
      padding="1rem"
      bg="gray.600"
      color="white"
      position="fixed"
      w="100%"
      zIndex="5"
    >
      <Flex align="center">
        <Box onClick={onOpen} as={FaBars}></Box>
        <Heading margin="0 1rem" as="h4" fontSize="lg">
          FinRec
        </Heading>
      </Flex>
      <FinRecDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default NavBar;

// top="0"
// left="0"
// zIndex="10"
// position="fixed"
// width="100%"
