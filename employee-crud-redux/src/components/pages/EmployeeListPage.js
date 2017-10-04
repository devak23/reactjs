import React, { Component } from 'react';
import { Message, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmpListComp from '../form/EmpListComp';

import { loadEmployees } from '../../actions/employee';
// import EmployeeRow from '../helpers/EmployeeRow';

class EmployeeListPage extends Component {
  state = {
    data: {
      employees: [],
    },
    loading: false,
    errors: null,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    this.props.loadEmployees().then(() =>
      this.setState({
        loading: false,
        data: { employees: this.props.employees },
      }),
    );
  };

  render() {
    const { loading, data, errors } = this.state;
    return (
      <Form loading={loading}>
        {errors && (
          <Message.Header>
            <Message.Content>
              Some problem occurred on the server!
            </Message.Content>
          </Message.Header>
        )}
        <EmpListComp employees={data.employees} />
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    employees: state.employees,
  };
}

EmployeeListPage.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  loadEmployees: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { loadEmployees })(EmployeeListPage);
