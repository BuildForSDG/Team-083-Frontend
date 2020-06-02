import React from 'react';
import { Heading, Text, Flex, Grid, Input } from '@chakra-ui/core';
import { useSelector } from 'react-redux';

const ProfileHead = () => {
  const [profileComplete] = React.useState(false);
  const { width, bp1 } = useSelector((state) => state.resize);

  return (
    <Flex
      mb="-40.5px"
      bg="#ce1b28"
      w={width >= bp1 ? `${width - 600}px` : '90%'}
      h="84px"
      shadow="md"
      borderWidth="1px"
      flex="1"
      rounded="md"
      direction="column"
      p="1rem"
      borderColor="#ce1b28"
      zIndex="2"
    >
      <Heading color="#fff" fontWeight="50" size="md">
        Edit Profile
      </Heading>
      {profileComplete ? '' : <Text color="#eee">Complete your profile</Text>}
    </Flex>
  );
};

const ProfileForm = () => {
  const { width, bp1, bp2 } = useSelector((state) => state.resize);

  return (
    <Grid
      p="2rem"
      bg="white"
      pt="40.5px"
      borderTop="none"
      shadow="md"
      borderWidth="1px"
      flex="1"
      rounded="md"
      w={width >= bp1 ? `${width - 550}px` : '100%'}
      rowGap="2rem"
      mt="1rem"
    >
      <Grid columnGap="2rem"  templateColumns={width >= bp2 ? '1fr 1fr' : '1fr'}>
        <Input variant="flushed" placeholder="Name" />
        <Input variant="flushed" placeholder="Email" />
      </Grid>

      <Input variant="flushed" placeholder="User Type" />
    </Grid>
  );
};

const DataTable = () => {
  return (
    <Grid justifyItems="center" rowGap="-5">
      <ProfileHead />
      <ProfileForm />
    </Grid>
  );
};

export default DataTable;
