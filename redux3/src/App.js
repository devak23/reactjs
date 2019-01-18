import React, { Component } from 'react';
import Routes from './Routes';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <Routes />
      </div>
    );
  }
}

export default App;
