import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import UserRoute from './components/routes/UserRoute';

// this is not a stateful class and therefore it is better to make this into
// a function rather than a class. Hence const App = () => {}

// The App component will be like a Router dispatcher in that, it will render
// the thing dependent on the route
const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <UserRoute path="/dashboard" exact component={DashboardPage} />
  </div>
);

export default App;
