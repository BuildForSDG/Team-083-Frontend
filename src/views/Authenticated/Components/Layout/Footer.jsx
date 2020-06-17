import React from 'react';
import { Flex, Text } from '@chakra-ui/core';
import { Link } from '@reach/router';

const Footer = () => {
  return (
    <Flex justify="space-between" mt="100px">
      <Text>SMEFund</Text>
      <Flex className="dashboard-footer">
        <style>{`.dashboard-footer a {margin: 0 10px}`}</style>
        <Link to="/">dashboard</Link>
        <Link to="/profile">profile</Link>
        <Link to="/funders">funders</Link>
        <Link to="/request-funds">request funds</Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
