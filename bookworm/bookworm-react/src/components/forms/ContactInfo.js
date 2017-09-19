import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';

const ContactInfo = ({ data, errors, handleOnChange }) => (
  <div>
    <Form.Field error={!!errors.line1}>
      <label htmlFor="line1">Line 1</label>
      <input
        type="text"
        name="line1"
        id="line1"
        value={data.line1}
        onChange={handleOnChange}
      />
      {errors.line1 && <InlineError text={errors.line1} />}
    </Form.Field>
    <Form.Field error={!!errors.line2}>
      <label htmlFor="line2">Line 2</label>
      <input
        type="text"
        name="line2"
        id="line2"
        value={data.line2}
        onChange={handleOnChange}
      />
      {errors.line2 && <InlineError text={errors.line2} />}
    </Form.Field>

    <Form.Field error={!!errors.city}>
      <label htmlFor="city">Firstname</label>
      <input
        type="text"
        name="city"
        id="city"
        value={data.city}
        onChange={handleOnChange}
      />
      {errors.city && <InlineError text={errors.city} />}
    </Form.Field>

    <Form.Field error={!!errors.country}>
      <label htmlFor="country">Country</label>
      <input type="text" name="country" id="country" value={data.country} />
      {errors.country && <InlineError text={errors.country} />}
    </Form.Field>

    <Form.Field error={!!errors.state}>
      <label htmlFor="state">Lastname</label>
      <input
        type="text"
        name="state"
        id="state"
        value={data.state}
        onChange={handleOnChange}
      />
      {errors.state && <InlineError text={errors.state} />}
    </Form.Field>

    <Form.Field error={!!errors.zipcode}>
      <label htmlFor="zipcode">Zipcode</label>
      <input type="text" name="zipcode" id="zipcode" value={data.zipcode} />
      {errors.zipcode && <InlineError text={errors.zipcode} />}
    </Form.Field>

    <Form.Field error={!!errors.telephone}>
      <label htmlFor="telephone">Telephone</label>
      <input
        type="text"
        name="telephone"
        id="telephone"
        value={data.telephone}
      />
      {errors.telephone && <InlineError text={errors.telephone} />}
    </Form.Field>
  </div>
);

ContactInfo.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    line1: PropTypes.string.isRequired,
    line2: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    line1: PropTypes.string.isRequired,
    line2: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
  }).isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default ContactInfo;
