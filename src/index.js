import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import store from './state/store';
import UnauthenticatedApp from './views/unauthenticated_app.jsx';
import AuthenticatedApp from './views/authenticated_app.jsx';

// import * as serviceWorker from './serviceWorker.js';
const App = () => {
  const { tokenSavedLocally } = useSelector((state) => state.auth);
  return tokenSavedLocally ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
/**
 * When app loads, check if data is saved locally
 * If it is display a loader
    * During that time, make an API request
    * If request succeeds, stop loading and show the dashboard
    * Else
 * Else
    * Display the homepage
*/
// serviceWorker.unregister();

export default App;
