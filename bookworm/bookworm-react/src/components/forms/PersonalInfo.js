import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';

const PersonalInfo = ({ data, errors, handleOnChange }) => (
  <div style={{ margin: '10px 0' }}>
    <Form.Field error={!!errors.email}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={data.email}
        placeholder="my.email@example.com"
        onChange={handleOnChange}
      />
      {errors.email && <InlineError text={errors.email} />}
    </Form.Field>
    <Form.Field error={!!errors.password}>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={data.password}
        placeholder="Create a secure password"
        onChange={handleOnChange}
      />
      {errors.password && <InlineError text={errors.password} />}
    </Form.Field>

    <Form.Field error={!!errors.firstname}>
      <label htmlFor="firstname">Firstname</label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="John"
        value={data.firstname}
        onChange={handleOnChange}
      />
      {errors.firstname && <InlineError text={errors.firstname} />}
    </Form.Field>

    <Form.Field error={!!errors.lastname}>
      <label htmlFor="lastname">Lastname</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Doe"
        value={data.lastname}
        onChange={handleOnChange}
      />
      {errors.lastname && <InlineError text={errors.lastname} />}
    </Form.Field>
  </div>
);

PersonalInfo.propTypes = {
  data: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default PersonalInfo;
