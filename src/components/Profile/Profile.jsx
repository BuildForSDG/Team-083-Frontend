import React from 'react';
import { Box, Avatar, Flex, Text } from '@chakra-ui/core';
import { FaSignOutAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import signOut from '../../http/sign_out';

const Profile = () => {
  // const { name } = JSON.parse(localStorage.getItem('smefund-user'));
  const { name } = useSelector((state) => state.auth);
  console.log(name)
  return (
    <Box>
      <Box
        bgPos="center"
        bgRepeat="no-repeat"
        height="200px"
        backgroundImage="url(../../images/milky_way.jpg)"
        backgroundColor="red"
        top="0"
        left="0"
        position="absolute"
      ></Box>
      <Box marginTop="100px"></Box>
      <Flex height="200px" direction="column" justifyContent="space-evenly" align="center">
        <Avatar size="2xl" name={name} />
        <Text fontSize="lg">{name}</Text>
      </Flex>
      <Box height="300px"></Box>

      <Flex onClick={signOut} cursor="pointer" alignItems="center" justifyContent="flex-end">
        <Text>Sign out</Text>
        <Box margin="0 10px" as={FaSignOutAlt}></Box>
      </Flex>
    </Box>
  );
};

export default Profile;
