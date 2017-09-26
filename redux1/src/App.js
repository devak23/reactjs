import React, { Component } from 'react';
import { Divider, Header, Segment, Icon } from 'semantic-ui-react';
import UsersPage from './components/pages/UsersPage';
import UserDetails from './components/pages/UserDetailsPage';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="ui container" style={{ margin: '20px 0' }}>
        <Header textAlign="center" size="huge">
          <Icon name="address book outline" />Employee Yellow Pages
        </Header>
        <Segment stacked>
          <h4>
            <Icon name="users" /> Employees
          </h4>
          <UsersPage />
          <Divider />
          <h4>
            <Icon name="list" />Details
          </h4>
          <UserDetails />
        </Segment>
      </div>
    );
  }
}

export default App;
