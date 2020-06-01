import React from 'react';
import { useSelector } from 'react-redux';

import UnauthenticatedApp from './views/unauthenticated_app.jsx';
import AuthenticatedApp from './views/authenticated_app.jsx';

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
