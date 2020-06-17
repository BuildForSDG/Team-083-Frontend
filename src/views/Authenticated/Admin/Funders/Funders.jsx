import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/core';
import UserList from '../../Components/UserList';
// import Header from "./Header";

const Funders = () => {
  return (
    <>
      <Flex justify="space-between">
        <Text fontSize="2xl">Funders</Text>
        <Box />
      </Flex>
      <UserList userType="funder" />
    </>
  );
};

export default Funders;
