import React from 'react';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { Router } from '@reach/router';

import Layout from '../Layout/Layout';
import Dashboard from '../Dashboard/Dashboard';
import About from '../About';
import Settings from '../Settings';
import NotFound from '../NotFound';
import customTheme from '../../utils/theme';

const AuthenticatedApp = () => {
  const MainApp = () => (
    <Layout>
      <Router>
        <Dashboard path="/" />
        <About path="/about" />
        <Settings path="/settings" />
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
