import React from 'react';
import { Table } from 'semantic-ui-react';

const EmployeeRow = emp => (
  <Table.Row key={emp.empno}>
    <Table.Cell>{emp.ename}</Table.Cell>
    <Table.Cell>{emp.deptno}</Table.Cell>
  </Table.Row>
);

export default EmployeeRow;
