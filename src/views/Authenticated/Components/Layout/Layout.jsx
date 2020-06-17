import React from 'react';
import { Box, useColorMode } from '@chakra-ui/core';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Aside from './Aside/Aside';
import NavBar from './NavBar';
import Footer from './Footer';
// import get from '../../../../utils/easy-storage';

const Layout = ({ children }) => {
  // const { userType } = get('smefund-user');
  const { width, bp2 } = useSelector((state) => state.resize);
  const { colorMode } = useColorMode();

  const myBgColor = {
    light: '#eef4f8',
    dark: '#1a202c'
  };

  const TabletAndMobile = () => (
    <Box>
      <NavBar />
      <Box background={myBgColor[colorMode]} padding="1rem">
        <Box mt="3rem" h="100vh">{children}</Box>
        {width > 700 && <Footer />}
      </Box>
    </Box>
  );

  const Desktop = () => (
    <Box>
      <Aside />
      <Box background={myBgColor[colorMode]} height="100%" marginLeft="200px" padding="1rem">
        <Box h="100%">{children}</Box>
        <Footer />
      </Box>
    </Box>
  );

  return <div>{width < bp2 ? <TabletAndMobile /> : <Desktop />}</div>;
};

Layout.propTypes = {
  children: PropTypes.object
};

export default Layout;
