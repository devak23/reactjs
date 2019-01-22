import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import updateUser from './actions/user-action';
import './App.css';

class App extends Component {
  handleOnUserUpdate = () => {
    console.log('handleOnUserUpdate() invoked.');
    this.props.onUpdateUser('Soham');
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div>
          <h2>{this.props.user}</h2>
          <button onClick={this.handleOnUserUpdate}>Update User</button>
        </div>
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

const mapActionsToProps = {
  onUpdateUser: updateUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
