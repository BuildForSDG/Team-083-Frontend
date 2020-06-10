import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/core';
import FunderList from './FunderList';
// import Header from "./Header";

const Funders = () => {
  return (
    <>
      <Flex justify="space-between">
        <Text fontSize="2xl">Funders</Text>
        <Box />
      </Flex>
      <FunderList />
    </>
  );
};

export default Funders;
