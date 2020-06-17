import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
// import App from './components/App';
import store from './state/store';
import UnauthenticatedApp from './views/unauthenticated_app.jsx';
import AuthenticatedApp from './views/authenticated_app.jsx';

// import * as serviceWorker from './serviceWorker.js';
const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// serviceWorker.unregister();

export default App;
