import React, { Component } from 'react';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Navbar />
        </header>
      </React.Fragment>
    );
  }
}

export default App;
