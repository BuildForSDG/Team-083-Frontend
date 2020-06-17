import React from 'react';
import { Router } from '@reach/router';

import Layout from './Unauthenticated/Layout';
import Index from './Unauthenticated/Index';
import Register from './Unauthenticated/Register';
import Login from './Unauthenticated/Login';
import PasswordReset from './Unauthenticated/PasswordReset';
import NotFound from './Unauthenticated/NotFound';

const ScrollToTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return children;
};

const UnauthenticatedApp = () => {
  return (
    <Layout>
      <Router>
        <ScrollToTop path="/">
          <Index path="/" />
          <Register path="/register" />
          <Login path="/login" />
          <PasswordReset path="/reset-password" />
          <NotFound default />
        </ScrollToTop>
      </Router>
    </Layout>
  );
};

export default UnauthenticatedApp;
