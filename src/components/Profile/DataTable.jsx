import React from 'react';
import { Heading, Text, Flex, Grid, Input, useTheme, Button } from '@chakra-ui/core';
import { useSelector } from 'react-redux';

const ProfileHead = () => {
  const [profileComplete] = React.useState(false);
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
      h="84px"
      shadow="md"
      borderWidth="1px"
      flex="1"
      rounded="md"
      direction="column"
      p="1rem"
      borderColor={primary}
      zIndex="2"
      marginBottom="-5rem"
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
  const theme = useTheme();

  const {
    colors: { primary }
  } = theme;

  return (
    <Grid
      p="2rem"
      bg="white"
      pt="100.5px"
      borderTop="none"
      shadow="md"
      borderWidth="1px"
      flex="1"
      rounded="md"
      w={width >= bp1 ? `${width - 550}px` : '100%'}
      rowGap="2rem"
      mt="1rem"
    >
      <Grid columnGap="2rem" templateColumns={width >= bp2 ? '1fr 1fr' : '1fr'}>
        <Input variant="flushed" placeholder="Name" />
        <Input variant="flushed" placeholder="Email" />
      </Grid>

      <Input variant="flushed" placeholder="User Type" />
      <Button width="100px" mt={4} backgroundColor={primary} color="white" type="submit">
        Request
      </Button>
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
