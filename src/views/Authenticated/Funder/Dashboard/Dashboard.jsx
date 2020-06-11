import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/core';

import SummaryCards from './SummaryCards';

const FunderDashboard = () => {
  return (
    <Box>
      <Flex justify="space-between">
        <Text fontSize="2xl">Dashboard </Text>
      </Flex>
      <SummaryCards />
    </Box>
  );
};

export default FunderDashboard;
