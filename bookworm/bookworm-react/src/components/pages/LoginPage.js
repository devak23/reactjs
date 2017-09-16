import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';

// The login page contains the login form. It will pass the submit function to the
// login form. The login form gathers data and invokes the submit function on this
// class. The login form doesn't know anything about what will happen to the data
// it passes to the LoginPage.
class LoginPage extends React.Component {
  /**
  * The submit function takes in the data fed by the child components and
  * dispatches thunk action with that data. The 'history' is a dependency
  * that will be passed on to the this component by the react router
  */
  submit = data =>
    this.props.login(data).then(() => this.props.history.push('/dashboard'));

  render() {
    return (
      <div>
        <h1> Login Page</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

// the connect function connects to Redux. The first parameter is a props which
// allows state to be passed from Redux to this component, which in this case is
// null. The second component is the dispatch (props). This is where we can map
// our functions into dispatch. Note, we are not just invoking the function here,
// we are dispatching actions to the redux store. For that we just need to provide
// function in the object we want to wrap in dispatch
export default connect(null, { login })(LoginPage);
