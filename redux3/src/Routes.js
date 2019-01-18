import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error404 from './components/Error404';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/home' component={Home} />
        <Route exact path=''>
          <Redirect to='/home' />
        </Route>
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
