import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Grid, Divider } from 'semantic-ui-react';
import EmployeeListPage from './components/pages/EmployeeListPage';
import EmployeeDetailsPage from './components/pages/EmployeeDetailsPage';

const App = () => (
  <div className="ui container" style={{ margin: '20px 0' }}>
    <Header as="h2" content="Employee Lookup" />
    <Divider />
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column>
          <EmployeeListPage />
        </Grid.Column>
        <Grid.Column>
          <EmployeeDetailsPage />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default App;
