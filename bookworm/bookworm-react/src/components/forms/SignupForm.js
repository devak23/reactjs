import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Tab } from 'semantic-ui-react';
import isEmpty from 'lodash/isEmpty';
import isEmail from 'validator/lib/isEmail';

import CancelButton from '../buttons/CancelButton';
import PersonalInfo from '../forms/PersonalInfo';
import ContactInfo from '../forms/ContactInfo';
import EducationInfo from '../forms/EducationInfo';

class SignupForm extends Component {
  state = {
    data: {
      email: '',
      firstname: '',
      lastname: '',
      password: '',
    },
    loading: false,
    errors: {},
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (isEmpty(errors)) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false }),
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = 'Please enter a valid email id';
    if (!data.password) errors.password = 'Please enter a valid password';
    if (!data.firstname) errors.firstname = 'Please provide a valid firstname';
    if (!data.lastname) errors.lastname = 'Please provide a valid lastname';

    return errors;
  };

  handleOnChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  };

  render() {
    const { data, errors, loading } = this.state;
    const panes = [
      {
        menuItem: 'PersonalInfo',
        render: () => (
          <Tab.Pane attached={false}>
            <PersonalInfo
              data={data}
              errors={errors}
              handleOnChange={this.handleOnChange}
            />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Educational Info',
        render: () => (
          <Tab.Pane attached={false}>
            {' '}
            <EducationInfo
              data={data}
              errors={errors}
              handleOnChange={this.handleOnChange}
            />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Contact Info',
        render: () => (
          <Tab.Pane attached={false}>
            <ContactInfo
              data={data}
              errors={errors}
              handleOnChange={this.handleOnChange}
            />
          </Tab.Pane>
        ),
      },
    ];

    return (
      <div>
        <Form onSubmit={this.handleSubmit} loading={loading}>
          <Form.Field>
            <Tab panes={panes} menu={{ secondary: true, pointing: true }} />
          </Form.Field>
          <Form.Field>
            <Button primary>Sign up</Button>
            <CancelButton to="/" text="Back to homepage" />
          </Form.Field>
        </Form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default SignupForm;
