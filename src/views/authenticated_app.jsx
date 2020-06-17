import React from 'react';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { Router } from '@reach/router';

import Layout from './Authenticated/Components/Layout/Layout';
import Settings from './Authenticated/Components/Settings';
import NotFound from './Authenticated/Components/NotFound';

import SMEDashboard from './Authenticated/SME/Dashboard/Dashboard';
import RequestFunds from './Authenticated/SME/RequestFunds/RequestFunds';
import Funders from './Authenticated/SME/Funders/Funders';
import SMEProfile from './Authenticated/SME/Profile/Profile';

import FunderDashboard from './Authenticated/Funder/Dashboard/Dashboard';
import SMEs from './Authenticated/Funder/SMEs/SMEs';
import FunderProfile from './Authenticated/Funder/Profile/Profile';

import AdminDashboard from './Authenticated/Admin/Dashboard/Dashboard';
import AdminProfile from './Authenticated/Admin/Profile/Profile';
import AdminSMEs from './Authenticated/Admin/SMEs/SMEs';
import AdminFunders from './Authenticated/Admin/Funders/Funders';

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
              <SMEProfile path="/profile" />
            </>
          )}
          {userType === 'FUNDER' && (
            <>
              <FunderDashboard path="/" />
              <SMEs path="/smes" />
              <FunderProfile path="/profile" />
            </>
          )}
          {userType === 'ADMIN' && (
            <>
              <AdminDashboard path="/" />
              <AdminProfile path="/profile" />
              <AdminSMEs path="/smes" />
              <AdminFunders path="/funders" />
            </>
          )}
          <Settings path="/settings" />
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
