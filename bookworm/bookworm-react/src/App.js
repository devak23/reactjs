import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

// this is not a stateful class and therefore it is better to make this into
// a function rather than a class. Hence const App = () => {}

// The App component will be like a Router dispatcher in that, it will render
// the thing dependent on the route
const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
  </div>
);

export default App;
