import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';

const EducationalInfoForm = ({ data, errors }) => (
  <div>
    <Form.Field error={!!errors.sscPercentage}>
      <label htmlFor="sscPercentage">SSC Percentage</label>
      <input
        type="text"
        name="sscPercentage"
        id="sscPercentage"
        value={data.sscPercentage}
      />
      {errors.sscPercentage && <InlineError text={errors.sscPercentage} />}
    </Form.Field>
    <Form.Field error={!!errors.hscPercentage}>
      <label htmlFor="hscPercentage">HSC Percentage</label>
      <input
        type="text"
        name="hscPercentage"
        id="hscPercentage"
        value={data.hscPercentage}
      />
      {errors.hscPercentage && <InlineError text={errors.hscPercentage} />}
    </Form.Field>
  </div>
);

EducationalInfoForm.propTypes = {
  data: PropTypes.shape({
    sscPercentage: PropTypes.number,
    hscPercentage: PropTypes.number,
  }).isRequired,
  errors: PropTypes.shape({
    sscPercentage: PropTypes.number,
    hscPercentage: PropTypes.number,
  }).isRequired,
};

export default EducationalInfoForm;
