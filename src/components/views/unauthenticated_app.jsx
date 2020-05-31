import React from 'react';
import { Router } from '@reach/router';

import Layout from '../Unauthenticated/Layout';
import Index from '../Unauthenticated/Index';
import Signup from '../Unauthenticated/Signup';
import Login from '../Unauthenticated/Login';
import PasswordReset from '../Unauthenticated/PasswordReset';
import NotFound from '../Unauthenticated/NotFound';

const UnauthenticatedApp = () => {
  return (
    <Layout>
      <Router>
        <Index path="/" />
        <Signup path="/register" />
        <Login path="/login" />
        <PasswordReset path="/reset-password" />
        <NotFound default />
      </Router>
    </Layout>
  );
};

export default UnauthenticatedApp;
