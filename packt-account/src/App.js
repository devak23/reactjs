import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFoundPage from './components/pages/NotFoundPage';
import MyAccountPage from './components/pages/MyAccountPage';
import LoginPage from './components/pages/LoginPage';
import RegistrationPage from './components/pages/RegistrationPage';
import RecoveryPage from './components/pages/RecoveryPage';
import './App.css';

const App = ({ user }) => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/login' />
      </Route>
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/register' component={RegistrationPage} />
      <Route exact path='/recovery' component={RecoveryPage} />
      {user && <Route exact path='/myaccount' component={MyAccountPage} />}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(App);
