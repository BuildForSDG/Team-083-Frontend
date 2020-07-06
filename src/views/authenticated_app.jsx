import React from 'react';
import { ThemeProvider, ColorModeProvider, CSSReset, Flex } from '@chakra-ui/core';
import { Router, navigate } from '@reach/router';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { useDispatch } from 'react-redux';

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

import isTokenValid from './utils/handle_token_validity';

const ScrollToTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return children;
};

const AuthenticatedApp = () => {
  const dispatch = useDispatch();
  const [isAuthenticated, setAuthenticated] = React.useState(false);
  const [loaderText, setLoaderText] = React.useState('Hang in there while we set things up');
  const [userType, setUserType] = React.useState();

  React.useEffect(() => {
    if (get('smefund-user')) {
      setUserType(get('smefund-user').userType);
    }
    isTokenValid()
      .then(() => {
        setAuthenticated(true);
      })
      .catch(() => {
        setLoaderText('Redirecting you back to the login page');
        dispatch({ type: 'SIGN_OUT' });
        navigate('/login');
      });
  }, [dispatch]);

  const MainApp = () => {
    return isAuthenticated ? (
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
    ) : (
      <Flex direction="column" justify="center" align="center" h="100vh">
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        <h1>{loaderText}</h1>
      </Flex>
    );
  };

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
