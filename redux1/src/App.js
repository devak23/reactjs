import React, { Component } from 'react';
import { Divider, Segment } from 'semantic-ui-react';
import UsersPage from './components/pages/UsersPage';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="ui container" style={{ margin: '20px 0' }}>
        <Segment stacked>
          <h2>Users</h2>
          <UsersPage />
          <Divider />
          <h2>Details</h2>
        </Segment>
      </div>
    );
  }
}

export default App;
