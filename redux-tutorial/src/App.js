import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import updateUser from './actions/user-action';
import './App.css';

const input = {
 height: '28px', 
 borderRadius: '2px', 
 border: '1px solid #ccc', 
 width: '200px', 
 padding: '5px'   
};

class App extends Component {
  handleOnUserUpdate = e => {
    console.log('handleOnUserUpdate() invoked.');
    this.props.onUpdateUser(e.target.value);
  };

  render() {
    const { user } = this.props;
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div>
          {!user && <h2>Enter a name</h2>}
          <h2>{user}</h2>
          <input onChange={this.handleOnUserUpdate} 
          placeholder="Enter a name" 
          style={input} />
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
