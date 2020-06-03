import React from 'react';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { Router } from '@reach/router';

import Layout from '../Layout/Layout';
import Dashboard from '../Dashboard/Dashboard';
import About from '../About';
import Settings from '../Settings';
import NotFound from '../NotFound';
import RequestFunds from '../RequestFunds/RequestFunds';
import Investors from '../Investors';
import customTheme from '../../utils/theme';
import Profile from '../Profile/Profile';

const AuthenticatedApp = () => {
  const MainApp = () => (
    <Layout>
      <Router>
        <Dashboard path="/" />
        <About path="/about" />
        <Settings path="/settings" />
        <Investors path="/investors" />
        <RequestFunds path="/request-funds" />
        <Profile path="/profile" />
        <NotFound default />
      </Router>
    </Layout>
  );

  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        <MainApp />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default AuthenticatedApp;
