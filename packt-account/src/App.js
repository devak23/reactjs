import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFoundPage from './components/pages/NotFoundPage';
import MyAccountPage from './components/pages/MyAccountPage';
import LoginPage from './components/pages/LoginPage';
import RegistrationPage from './components/pages/RegistrationPage';
import RecoveryPage from './components/pages/RecoveryPage';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <Redirect to='/login' />
      </Route>
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/myaccount' component={MyAccountPage} />
      <Route exact path='/register' component={RegistrationPage} />
      <Route exact path='/recovery' component={RecoveryPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default connect()(App);
