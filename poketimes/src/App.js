import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contacts' component={Contacts} />
          {/* <Route exact path='/'>
            <Redirect to='/home' />
          </Route> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
