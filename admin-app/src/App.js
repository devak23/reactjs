import React,{Fragment} from 'react';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Reports from './components/pages/Reports';
import Administration from './components/pages/Administration';
import "material-icons";

const App = ({location}) => {
  return (
    <Fragment>
      <header><Navbar location={location}/></header>
      <Route exact path='/home' component={Home} />
      <Route exact path='/home/:nextPath' component={Home} />
      <Route exact path='/reports/:nextPath' component={Reports} />
      <Route exact path='/reports' component={Reports} />
      <Route exact path='/administration/:nextPath' component={Administration} />
      <Route exact path='/administration' component={Administration} />
      <Route exact path='/' component={Home} />
    </Fragment>
  )
}

export default App;