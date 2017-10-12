import React from 'react';
import moment from 'moment';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const EmployeeListPage = ({ employees, onSelect }) => (
  <Table celled>
    <Table.Body>
      {employees.map(emp => (
        <Table.Row key={emp.id} onClick={() => onSelect(emp.id)}>
          <Table.Cell>{emp.ename}</Table.Cell>
          <Table.Cell>{emp.job}</Table.Cell>
          <Table.Cell>{moment(emp.hireDate).fromNow()}</Table.Cell>
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
