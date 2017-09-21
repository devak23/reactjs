import React, { Component } from 'react';
import EmployeeList from '../components/EmployeeList';

class EmployeePage extends Component {
  state = {
    employees: {},
    loading: false,
    errors: {},
  };

  componentDidMount() {}

  render() {
    const { employees } = this.state;
    return (
      <div>
        <EmployeeList employees={employees} />
      </div>
    );
  }
}

export default EmployeePage;
