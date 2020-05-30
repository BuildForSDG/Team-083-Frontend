import React from 'react';
import { Router } from '@reach/router';

import Layout from '../Unauthenticated/Layout';
import Index from '../Unauthenticated/Index';

const UnauthenticatedApp = () => {
  return (
    <Layout>
      <Router>
        <Index path="/" />
      </Router>
    </Layout>
  );
};

export default UnauthenticatedApp;
