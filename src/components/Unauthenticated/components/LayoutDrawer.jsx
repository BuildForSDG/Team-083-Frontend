import React from 'react';
import { Box, Flex } from '@chakra-ui/core';
import { FaTimes } from 'react-icons/fa';

import LayoutNavLinks from './LayoutNavLinks';

const LayoutDrawer = ({ isOpen, close }) => {
  return (
    <Box
      height="100%"
      background="#111111"
      display="flex"
      flexDirection="column"
      px="2rem"
      py="1rem"
      position="fixed"
      top="0"
      right="0"
      width="200px"
    >
      <Flex justifyContent="space-between">
        <Box />
        <Box onClick={() => close(!isOpen)} width="20px" height="20px" as={FaTimes} />
      </Flex>
      <Box alignItems="center" display="flex" flexDirection="column">
        <style>{`a{text-decoration: none}`}</style>
        <LayoutNavLinks />
      </Box>
    </Box>
  );
};

export default LayoutDrawer;
