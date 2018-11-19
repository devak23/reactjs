import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRoster from './fullRoster';
import Player from './player';

const Roster = () => (
  <div>
    <Switch>
      <Route exact path='/roster' component={FullRoster} />
      <Route path='/roster/:number' component={Player}></Route>
    </Switch>
  </div>
)

export default Roster;