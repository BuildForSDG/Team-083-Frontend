import React from 'react';
import { Box, Flex, Text, LightMode, CloseButton, Grid, useTheme } from '@chakra-ui/core';
import PropTypes from 'prop-types';

import { FaUser, FaTachometerAlt, FaMoneyBill, FaUsers } from 'react-icons/fa';
import { Link } from '@reach/router';
// import bg from '../../images/sidebar-2.jpg';

const AsideButton = ({ link, icon, value, isActive, setActiveButton }) => {
  const theme = useTheme();
  const primaryColor = theme.colors.asideButton;
  return (
    <Link to={link}>
      <Grid
        onClick={() => setActiveButton(link)}
        rounded="md"
        p="10px"
        alignContent="center"
        templateColumns="1fr 4fr"
        background={link === isActive && { primaryColor }}
      >
        <Box w="20px" h="20px" color={link === isActive ? 'white' : 'gray.600'} alignSelf="center" as={icon} />
        <Text color={link === isActive ? 'white' : 'gray.600'}>{value}</Text>
      </Grid>
    </Link>
  );
};

AsideButton.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.func,
  value: PropTypes.string,
  isActive: PropTypes.bool,
  setActiveButton: PropTypes.func
};

const Aside = ({ width, closeButton, onClose }) => {
  const [activeButton, setActiveButton] = React.useState('/');
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

      {/* <Flex padding="1rem" height="200px" alignItems="start" justifyContent="space-evenly" direction="column"> */}
      <Grid rowGap="2rem" padding="1rem">
        <AsideButton
          link="/"
          icon={FaTachometerAlt}
          value="Dashboard"
          isActive={activeButton}
          setActiveButton={setActiveButton}
        />
        <AsideButton
          link="/profile"
          icon={FaUser}
          value="Profile"
          isActive={activeButton}
          setActiveButton={setActiveButton}
        />
        <AsideButton
          link="/investors"
          icon={FaUsers}
          value="Investors"
          isActive={activeButton}
          setActiveButton={setActiveButton}
        />
        <AsideButton
          link="/request-funds"
          icon={FaMoneyBill}
          value="Request funds"
          isActive={activeButton}
          setActiveButton={setActiveButton}
        />
      </Grid>
      {/* </Flex> */}
    </Box>
  );
};

Aside.propTypes = {
  width: PropTypes.string,
  closeButton: PropTypes.bool,
  onClose: PropTypes.func
};

export default Aside;
