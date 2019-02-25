import React, { Component } from 'react';
import Menu from './components/Menu';
import Messages from './components/Messages';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Messages />
      </div>
    );
  }
}

export default App;
