import React from 'react';
import { Flex, Text, useColorMode } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const InfoCard = ({ name, value, color }) => {
  const { colorMode } = useColorMode();

  const myBgColor = {
    light: '#fff',
    dark: 'gray.600'
  };

  return (
    <Flex
      padding="1rem 0"
      margin="1rem"
      flexBasis="200px"
      flexGrow="1"
      flexShrink=" 0"
      align="center"
      rounded="lg"
      bg={myBgColor[colorMode]}
      direction="column"
      shadow="sm"

    >
      <Text color={color} fontSize="24px">
        {value}
      </Text>
      <Text>{name}</Text>
    </Flex>
  );
};

InfoCard.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string
};

const SummaryCards = () => {
  return (
    <Flex width="100%" my="1rem" justifyContent="space-between" flexWrap="wrap">
      <InfoCard name="SMEs funded" value="30" color="#4d80f3" />
      <InfoCard name="SMEs requesting funds" value="200" color="#fb6d9d" />
      <InfoCard name="Amount invested" value="$2000" color="#81c868" />
    </Flex>
  );
};

export default SummaryCards;
