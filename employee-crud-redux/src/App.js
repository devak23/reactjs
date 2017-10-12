import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import { Header, Grid, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import EmployeeListPage from './components/pages/EmployeeListPage';
import EmployeeDetailsPage from './components/pages/EmployeeDetailsPage';
import { loadEmployees, fetchEmployee } from './actions/employee';

class App extends Component {
  state = {
    data: {
      employees: [],
      selectedEmployee: null,
    },
    loading: false,
    errors: {},
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

  handleSelect = empId =>
    this.props.fetchEmployee(empId).then(() => {
      console.log('Selected employee: ', this.props.selectedEmployee);
      this.setState({
        data: {
          ...this.state.data,
          selectedEmployee: this.props.selectedEmployee,
        },
      });
    });

  render() {
    const { data } = this.state;

    return (
      <div className="ui container" style={{ margin: '20px 0' }}>
        <Header as="h2" content="Employee Lookup" />
        <Divider />
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <EmployeeListPage
                employees={data.employees}
                onSelect={this.handleSelect}
              />
            </Grid.Column>
            <Grid.Column>
              {!data.selectedEmployee && <div>Please select an employee </div>}
              {data.selectedEmployee && (
                <EmployeeDetailsPage employee={data.selectedEmployee} />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  loadEmployees: PropTypes.func.isRequired,
  fetchEmployee: PropTypes.func.isRequired,
  employees: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  selectedEmployee: PropTypes.shape({}),
};

App.defaultProps = {
  selectedEmployee: {},
};

function mapStateToProps(state) {
  console.log('EmployeeListPage:: mapStateToProps:: state = ', state);

  return {
    employees: isEmpty(state.employees) ? [{}] : state.employees,
    selectedEmployee: state.selectedEmployee,
  };
}

export default connect(mapStateToProps, { loadEmployees, fetchEmployee })(App);
