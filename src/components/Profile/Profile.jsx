import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/core';
import { FaSignOutAlt, FaNode } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import signOut from '../../http/sign_out';
import ImageAndStats from './ImageAndStats';
import DataTable from './DataTable';

const Profile = () => {
  const { width, bp1 } = useSelector((state) => state.resize);

  return (
    <Box>
      <Flex justify="space-between">
        <Text fontSize="2xl">User Profile</Text>
        <Box as={FaNode} />
      </Flex>

      <Flex direction={width <= bp1 ? 'column' : 'row'} my="5rem" justify="space-around">
        <DataTable />
        {width <= bp1 ? <Box h="5rem" /> : ''}
        <ImageAndStats />
      </Flex>

      <Flex onClick={signOut} cursor="pointer" alignItems="center" justifyContent="flex-end">
        <Text>Sign out</Text>
        <Box margin="0 10px" as={FaSignOutAlt}></Box>
      </Flex>
    </Box>
  );
};

export default Profile;
