import React from 'react';

import { Heading, Text, Flex, Grid, useTheme, Box } from '@chakra-ui/core';
import { useSelector } from 'react-redux';
import FundsRequestForm from './FundsRequestForm';

const ProfileHead = () => {
  const { width, bp1 } = useSelector((state) => state.resize);
  const theme = useTheme();

  const {
    colors: { primary }
  } = theme;

  return (
    <Flex
      mb="-40.5px"
      bg={primary}
      w={width >= bp1 ? `${width - 600}px` : '90%'}
      shadow="md"
      borderWidth="1px"
      flex="1"
      rounded="md"

      p="1.2rem 1rem"
      borderColor={primary}
      zIndex="2"
      marginBottom="-3rem"
    >
      <Heading color="#fff" fontWeight="50" size="md">
        Request for funds
      </Heading>
    </Flex>
  );
};

const RequestFunds = () => {
  return (
    <>
      <Flex justify="space-between">
        <Text fontSize="2xl">Request funds</Text>
        <Box />
      </Flex>
      <Box h="50px" w="100%" />
      <Grid justifyItems="center" rowGap="-5">
        <ProfileHead />
        <FundsRequestForm />
      </Grid>
    </>
  );
};

export default RequestFunds;
