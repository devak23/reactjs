import React from 'react';
import { Item } from 'semantic-ui-react';
import people2 from '../images/people2.png';

const myemployees = [
  {
    id: '5999826d9e982c137ed89cee',
    empno: 7369,
    ename: 'SMITH',
    job: 'CLERK',
  },
  {
    id: '5999826d9e982c137ed89cef',
    empno: 7499,
    ename: 'ALLEN',
    job: 'SALESMAN',
  },
];

function parseEmp(employees) {
  const items = [];
  employees.map(emp =>
    items.push({
      childKey: emp.id,
      image: { people2 },
      header: emp.empno,
      description: emp.ename,
      meta: emp.job,
    }),
  );

  return items;
}

const EmployeeList = () => (
  <div>
    <h1>Employee List</h1>
    <Item.Group items={parseEmp(myemployees)} />
  </div>
);

export default EmployeeList;
