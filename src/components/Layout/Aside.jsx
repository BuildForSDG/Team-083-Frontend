import React from 'react';
import { Button, Box, Flex, Text, LightMode, CloseButton } from '@chakra-ui/core';
import PropTypes from 'prop-types';

import { FaUser, FaTachometerAlt, FaMoneyBill, FaPeopleCarry, FaUsers } from 'react-icons/fa';
import { Link } from '@reach/router';
// import bg from '../../images/sidebar-2.jpg';

const AsideButton = ({ link, icon, value, isActive }) => {
  return (
    <Link to={link}>
      <Button backgroundColor={isActive ? 'blue' : 'gray'} w="150px" leftIcon={icon}>
        {value}
      </Button>
    </Link>
  );
};

AsideButton.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.func,
  value: PropTypes.string,
  isActive: PropTypes.bool
};

const Aside = ({ width, closeButton, onClose }) => {
  return (
    <Box
      backgroundPosition="cover"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      // backgroundImage={`url(${bg})`}
      overflow="auto"
      width={width || '200px'}
      position="fixed"
      height="100vh"
    >
      <LightMode>
        <Flex height="60px" bg="gray.600" justify="space-evenly" align="center">
          <Text color="white" fontSize="2xl">
            SMEFund
          </Text>
          {closeButton ? <CloseButton onClick={onClose} /> : ''}
        </Flex>
      </LightMode>

      <Flex padding="1rem" height="200px" alignItems="start" justifyContent="space-evenly" direction="column">
        <AsideButton link="/" icon={FaTachometerAlt} value="Dashboard" isActive={false} />
        <AsideButton link="/profile" icon={FaUser} value="Profile" isActive={true} />
        <AsideButton link="/investors" icon={FaUsers} value="Investors" isActive={false} />
        <AsideButton link="/request-funds" icon={FaMoneyBill} value="Request funds" isActive={false} />
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
