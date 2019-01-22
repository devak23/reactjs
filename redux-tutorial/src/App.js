import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    console.log('props: ', this.props);

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}
//! mapStateToPros receives the state of the store based on which we can decide
//! what props we want to pass to the components
const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

export default connect(mapStateToProps)(App);
