import React from 'react';
import moment from 'moment';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const EmpListComp = ({ employees }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Employee Name</Table.HeaderCell>
        <Table.HeaderCell>Job</Table.HeaderCell>
        <Table.HeaderCell>Hire Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {employees &&
        employees.map(emp => (
          <Table.Row key={emp.id}>
            <Table.Cell>{emp.ename}</Table.Cell>
            <Table.Cell>{emp.job}</Table.Cell>
            <Table.Cell>{moment(emp.hireDate).fromNow()}</Table.Cell>
          </Table.Row>
        ))}
    </Table.Body>
  </Table>
);

EmpListComp.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default EmpListComp;
