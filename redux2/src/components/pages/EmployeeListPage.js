import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import { loadEmployees } from '../../actions/employeeAction';
import EmployeeListComp from '../form/EmployeeListComp';

class EmployeeListPage extends Component {
  state = {
    data: {
      employees: [],
    },
    errors: {},
    loading: false,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    this.props
      .loadEmployees()
      .then(() =>
        this.setState({ loading: false, employees: this.props.employees }),
      );
  };

  render() {
    const { loading, employees } = this.state;
    console.log('EmployeeListPage :: render :: employees ', employees);
    return (
      <div>
        <Form loading={loading}>
          <EmployeeListComp employees={employees} />
        </Form>
      </div>
    );
  }
}

EmployeeListPage.propTypes = {
  loadEmployees: PropTypes.func.isRequired,
  employees: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

function mapStateToProps(state) {
  console.log('EmployeeListPage:: mapStateToProps:: state ===> ', state);
  return {
    employees: state.employees,
  };
}

export default connect(mapStateToProps, { loadEmployees })(EmployeeListPage);
