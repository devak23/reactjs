import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import Dashboard from './home/Dashboard';
import Schedules from './home/Schedules';
import Diagnostics from './home/Diagnostics';

const Home = () => (
  <Fragment>
    <div><strong>Home</strong></div>
    <Route exact path='/home/dashboard' component={Dashboard} />
    <Route exact path='/home/diagnostics' component={Diagnostics} />
    <Route exact path='/home/schedules' component={Schedules} />
  </Fragment>
);

export default Home;
