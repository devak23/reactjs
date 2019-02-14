import React, { Component } from 'react';
import logo from './logo.svg';
import Grid from './components/Grid';
import data from './data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <Grid data={data} />
      </div>
    );
  }
}

export default App;
