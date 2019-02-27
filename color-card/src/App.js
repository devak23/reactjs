import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>Color Card</header>
        <div>
          <Card color='#33e330' />
        </div>
      </div>
    );
  }
}

export default App;
