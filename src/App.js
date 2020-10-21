import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignInOidc from './pages/signin-oidc'
import './App.css';
import Home from './pages/home'
import Login from './pages/login'
import PrivateRoute from './utils/privateroute';
import { Provider } from 'react-redux'
import store from './store'
import userManager, { loadUserFromStorage } from './services/userService'
import AuthProvider from './utils/authProvider'

function App() {

  useEffect(() => {
    loadUserFromStorage(store)
  }, []);

  return (
    <Provider store={store}>
      <AuthProvider userManager={userManager} store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signin-oidc" component={SignInOidc} />
            <Route path="/Home" component={Home} />
            <PrivateRoute exact path="/" component={Home} />
          </Switch>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
