import React from 'react';
import {Route} from 'react-router-dom';
import Dashboard from './home/Dashboard';
import Schedules from './home/Schedules';
import Diagnostics from './home/Diagnostics';

const Home = () => (
  <div>
    <div><strong>Home</strong></div>
    <Route exact path='/home/dashboard' component={Dashboard} />
    <Route exact path='/home/diagnostics' component={Diagnostics} />
    <Route exact path='/home/schedules' component={Schedules} />
  </div>
);

export default Home;
