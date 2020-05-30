import React from 'react';
import UnauthenticatedApp from './views/unauthenticated_app.jsx';
import AuthenticatedApp from './views/authenticated_app.jsx';

const App = () => {
  const [user] = React.useState(false);
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
