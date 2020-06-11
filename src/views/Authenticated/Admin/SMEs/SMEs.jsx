import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/core';
import UserList from '../../Components/UserList';
// import Header from "./Header";

const SMEs = () => {
  return (
    <>
      <Flex  justify="space-between">
        <Text fontSize="2xl">SMEs</Text>
        <Box />
      </Flex>
      <UserList userType="sme" />
    </>
  );
};

export default SMEs;
