import React, {Component} from 'react';
import {Form, Button} from "semantic-ui-react";
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import InlineError from "../helpers/InlineError"
import Validator from 'validator';

const CancelButton = () => (
  <Route render={
    ({history}) => (
      <button
        className="ui right floated default button"
        style={{ "marginLeft": "10px" }}
        onClick={() => {history.push('/')}}>
        Cancel
      </button>
    )
  }/>
);

class LoginForm extends Component {
  state = {
    data: {
      username: '',
      password: ''
    },
    errors: {}
  };

  handleChange = (e) => {
    this.setState({
      data: {...this.state.data, [e.target.name] : e.target.value }
    });
  }

  handleSubmit = () => {
    // perform validation
    const errors = this.validate(this.state.data);
    this.setState({errors});

    // pass the input to the function passed in to the prop.
    if (Object.keys(errors).length === 0) {
      this.props.signIn(this.state.data);
      this.setState({data: {username: '', password: ''}});
    }
  }

  validate = (data) => {
    const errors = {};
    if (!data.username.trim()) {
      errors.username = 'Username (email) is required';
    } else if (!Validator.isEmail(data.username)) {
      errors.username = 'Username is not a valid email address';
    }

    if (!data.password.trim()) errors.password = 'Password is required';

    return errors;
  }


  render() {
    const {data, errors} = this.state;
    return (
      <div className="ui padded segment">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field error={!!errors.username}>
            <input type="text" name="username" id="username"
                   value={ data.username }
                   onChange={ this.handleChange }
                   placeholder="myname@example.com"/>
            { errors && <InlineError text={ errors.username } />}
          </Form.Field>
          <Form.Field error={!!errors.password}>
            <input type="password" name="password" id="password"
                   value={ data.password }
                   onChange={ this.handleChange }
                   placeholder="Please enter a valid password"/>
            { errors && <InlineError text={ errors.password } />}
          </Form.Field>
          <Form.Field>
            <CancelButton />
            <Button className="ui right floated primary button" type="submit">Sign in</Button>
            <div className="clear"></div>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

LoginForm.PropTypes = {
  signIn: PropTypes.func.isRequired
};

LoginForm.defaultProps = {
  signIn: () => { console.log('signIn function has to be passed on to this component')}
}

export default LoginForm;
