import React, { Component } from 'react';
import WeatherWidget from './components/WeatherWidget';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>Weather Lookup</header>
        <WeatherWidget />
      </div>
    );
  }
}

export default App;
