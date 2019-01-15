import React, { Component } from 'react';
import logo from './logo.svg';
import XssVanilla from './components/XssVanilla';
import XssInnerHtml from './components/XssInnerHtml';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>A demo of Xss vulnerabilities and how to eliminiate them with React</p>
        </header>
        <div className='xss-container'>
          <XssVanilla />
          <XssInnerHtml />
          <XssVanilla />
        </div>
      </div>
    );
  }
}

export default App;
