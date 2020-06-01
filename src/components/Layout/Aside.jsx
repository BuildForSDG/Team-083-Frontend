import React from 'react';
import { Button, Avatar, Box, Flex, Text, LightMode, CloseButton } from '@chakra-ui/core';
import PropTypes from 'prop-types';

import { FaUser, FaTachometerAlt } from 'react-icons/fa';
import { Link } from '@reach/router';

const Aside = ({ width, closeButton, onClose }) => {
  const { name } = JSON.parse(localStorage.getItem('smefund-user'));
  return (
    <Box overflow="auto" width={width || '200px'} position="fixed" height="100vh">
      <LightMode>
        <Flex height="60px" bg="gray.600" justify="space-evenly" align="center">
          <Text color="white" fontSize="2xl">
            SMEFund
          </Text>
          {closeButton ? <CloseButton onClick={onClose} /> : ''}
        </Flex>
      </LightMode>

      <Flex direction="column" justifyContent="space-evenly" align="center" height="200px" margin="2rem 0">
        <Avatar size="xl" name={name} />
        <Text fontSize="lg">{name}</Text>
        <Link to="/profile">
          <Button leftIcon={FaUser}>Profile</Button>
        </Link>
      </Flex>

      <Flex height="200px" alignItems="center" justifyContent="space-evenly" direction="column">
        <Link to="/">
          <Button leftIcon={FaTachometerAlt} className="go-to-dashboard">
            Dashboard
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

Aside.propTypes = {
  width: PropTypes.string,
  closeButton: PropTypes.bool,
  onClose: PropTypes.func
};

export default Aside;
