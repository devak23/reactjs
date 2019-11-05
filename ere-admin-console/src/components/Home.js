import React from 'react';
import Dashboard from './home/Dashboard';
import Schedules from './home/Schedules';
import Diagnostics from './home/Diagnostics';

const Home = () => (
  <div>
    <div><strong>Home</strong></div>
    <Dashboard />
    <Diagnostics />
    <Schedules />
  </div>
);

export default Home;
