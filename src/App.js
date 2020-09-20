import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './pages/home'
import Login from './pages/login'
import PrivateRoute from './utils/privateroute';
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/Home" component={Home} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
