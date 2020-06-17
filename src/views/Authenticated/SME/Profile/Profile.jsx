import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/core';
import { useSelector } from 'react-redux';

import ImageAndStats from './ImageAndStats';
import DataTable from './DataTable';

const Profile = () => {
  const { width, bp1 } = useSelector((state) => state.resize);
  const [verified] = React.useState(false);

  return (
    <Box>
      <Flex justify="space-between">
        <Text fontSize="2xl">User Profile {verified || '(Unverified)'} </Text>
        <Box />
      </Flex>

      <Flex direction={width <= bp1 ? 'column' : 'row'} my="5rem" justify="space-around">
        <DataTable />
        {width <= bp1 && <Box h="5rem" />}
        <ImageAndStats />
      </Flex>
    </Box>
  );
};

export default Profile;
