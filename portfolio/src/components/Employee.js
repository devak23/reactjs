import React from 'react';
import PropTypes from 'prop-types';

const Employee = ({ name, empno, job }) => (
  <div>
    <div>{name}</div>
    <div>{empno}</div>
    <div>{job}</div>
  </div>
);

Employee.propTypes = {
  name: PropTypes.string.isRequired,
  empno: PropTypes.number.isRequired,
  job: PropTypes.string.isRequired,
};

export default Employee;
