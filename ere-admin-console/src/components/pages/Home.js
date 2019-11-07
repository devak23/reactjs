import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './home/Dashboard';
import Schedules from './home/Schedules';
import Diagnostics from './home/Diagnostics';

const Home = () => (
  <section  className='container'>
    <Switch>
      <Route exact path='/home/dashboard' component={Dashboard} />
      <Route exact path='/home/diagnostics' component={Diagnostics} />
      <Route exact path='/home/schedules' component={Schedules} />
      <Route exact path='/home' component={Dashboard} />
    </Switch>
  </section>
);

export default Home;
