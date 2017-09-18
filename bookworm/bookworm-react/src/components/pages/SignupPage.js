import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Grid, List, Segment } from 'semantic-ui-react';
import SignupForm from '../forms/SignupForm';
import signup from '../../actions/users';

class SignupPage extends Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push('/dashboard'));

  render() {
    return (
      <div style={{ margin: '20px 0' }}>
        <Header size="medium">Sign Up</Header>
        <Grid columns={2} relaxed>
          <Grid.Column>
            <SignupForm submit={this.submit} />
          </Grid.Column>
          <Grid.Column>
            <Segment size="large">
              <Header>Incredible Pricing</Header>
              <List as="ul">
                <List.Item as="li">1% (capped at 2$) per transaction</List.Item>
                <List.Item as="li">We charge no other fees</List.Item>
              </List>
            </Segment>
            <Segment size="large">
              <Header>Powerful features</Header>
              <List as="ul">
                <List.Item as="li">Accept one off payments</List.Item>
                <List.Item as="li">
                  Control your subscription and cash flow
                </List.Item>
                <List.Item as="li">Variable direct debits</List.Item>
              </List>
            </Segment>
            <Segment size="large">
              <Header>Instant Access</Header>
              <List as="ul">
                <List.Item as="li">Sign up in 60 seconds</List.Item>
                <List.Item as="li">
                  Start collecting money immediately
                </List.Item>
                <List.Item as="li">No merchant account required</List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

SignupPage.propTypes = {
  signup: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, { signup })(SignupPage);
