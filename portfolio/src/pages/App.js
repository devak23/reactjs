import React from 'react';
import { Route } from 'react-router-dom';
import EmployeePage from './EmployeePage';

const App = () => (
  <div>
    <Route exact path="/" component={EmployeePage} />
  </div>
);

export default App;
