import React, {Fragment} from 'react';
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
      <div><strong>Home</strong></div>
    </Switch>
  </section>
);

export default Home;
