import React, { Component } from 'react';
import logo from './logo.svg';
import { bindActionCreators } from 'redux';
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
    const { user, userFullName } = this.props;
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <div>
          {!user && <h2>Enter a name</h2>}
          <h2>{user}</h2>
          <h3>{userFullName}</h3>
          <input onChange={this.handleOnUserUpdate} placeholder='Enter a name' style={input} />
        </div>
      </div>
    );
  }
}
//! mapStateToPros receives the state of the store based on which we can decide
//! what props we want to pass to the components
const mapStateToProps = (state, props) => {
  console.log('mapStateToProps: props passed in from index.js into <App /> component: ', props);

  return {
    products: state.products,
    user: state.user,
    userFullName: `${state.user} ${props.lastName}`
  };
};

//! this can also be a function with its first argument dispatch and second props
//! but this time we need to explicitly bind dispatch to the actions in here
//! this is done via the bindActionCreators API from redux
const mapActionsToProps = (dispatch, props) => {
  console.log('mapActionsToProps: props passed in into <App /> component: ', props);
  return bindActionCreators({ onUpdateUser: updateUser }, dispatch);
};

//! the result of this is what the component will receive.
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState, propsFromDispatch, ownProps);

  return {};
};

export default connect(
  mapStateToProps,
  mapActionsToProps,
  mergeProps
)(App);
