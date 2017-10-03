import React from 'react';
import PropTypes from 'prop-types';

const EmployeeRowComp = ({ employee }) => (
  <div key={employee.id}>{employee.ename}</div>
);

EmployeeRowComp.propTypes = {
  employee: PropTypes.shape({}).isRequired,
};

export default EmployeeRowComp;
