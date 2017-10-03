import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Table } from 'semantic-ui-react';

const EmployeeListComp = ({ employees }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Job</Table.HeaderCell>
        <Table.HeaderCell>Salary</Table.HeaderCell>
        <Table.HeaderCell>Commission</Table.HeaderCell>
        <Table.HeaderCell>Hire Date</Table.HeaderCell>
        <Table.HeaderCell>Department No</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {employees &&
        employees.map(emp => (
          <Table.Row key={emp.id}>
            <Table.Cell>{emp.ename}</Table.Cell>
            <Table.Cell>{emp.job}</Table.Cell>
            <Table.Cell>{emp.sal}</Table.Cell>
            <Table.Cell>{emp.comm}</Table.Cell>
            <Table.Cell>{moment(emp.hireDate).fromNow()}</Table.Cell>
            <Table.Cell>{emp.deptno}</Table.Cell>
          </Table.Row>
        ))}
    </Table.Body>
  </Table>
);

EmployeeListComp.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default EmployeeListComp;
