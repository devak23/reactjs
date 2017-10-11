import React, { Component } from 'react';
import moment from 'moment';
import { Message, Form, Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadEmployees } from '../../actions/employee';

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
        {/* <EmpListComp employees={data.employees} /> */}

        <Table celled>
          {/* <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Employee Name</Table.HeaderCell>
              <Table.HeaderCell>Job</Table.HeaderCell>
              <Table.HeaderCell>Hire Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header> */}

          <Table.Body>
            {data.employees &&
              data.employees.map(emp => (
                <Table.Row key={emp.id}>
                  <Table.Cell>{emp.ename}</Table.Cell>
                  <Table.Cell>{emp.job}</Table.Cell>
                  <Table.Cell>{moment(emp.hireDate).fromNow()}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
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
