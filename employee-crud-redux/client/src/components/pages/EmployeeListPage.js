import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const EmployeeListPage = ({ employees, onSelect }) => (
  <Table celled>
    <Table.Body>
      {employees.map(emp => (
        <Table.Row key={emp.empno} onClick={() => onSelect(emp.empno)}>
          <Table.Cell>{`${emp.ename}, ${emp.lname}`}</Table.Cell>
          <Table.Cell>{emp.job}</Table.Cell>
          <Table.Cell>{emp.empno}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

EmployeeListPage.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default EmployeeListPage;
