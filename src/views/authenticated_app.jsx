import React from 'react';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { Router } from '@reach/router';

import Layout from './Authenticated/Components/Layout/Layout';
import SMEDashboard from './Authenticated/SME/Dashboard/Dashboard';
import Settings from './Authenticated/Components/Settings';
import NotFound from './Authenticated/Components/NotFound';

import RequestFunds from './Authenticated/SME/RequestFunds/RequestFunds';
import Funders from './Authenticated/SME/Funders/Funders';
import Profile from './Authenticated/SME/Profile/Profile';

import customTheme from './utils/theme';
import { get } from './utils/easy-storage';

const ScrollToTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return children;
};

const AuthenticatedApp = () => {
  const { userType } = get('smefund-user');
  const MainApp = () => (
    <Layout>
      <Router>
        <ScrollToTop path="/">
          {userType === 'SME' && (
            <>
              <SMEDashboard path="/" />
              <Funders path="/funders" />
              <RequestFunds path="/request-funds" />
              <Profile path="/profile" />
              <Settings path="/settings" />
            </>
          )}
          {userType === 'FUNDER' && (
            <>
              {/* <FunderDashboard path="/" /> */}
              <Settings path="/settings" />
            </>
          )}
          {userType === 'ADMIN' && (
            <>
              {/* <AdminDashboard path="/" /> */}
              <Settings path="/settings" />
            </>
          )}
          <NotFound default />
        </ScrollToTop>
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
