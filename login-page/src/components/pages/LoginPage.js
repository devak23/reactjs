import React from 'react';
import './LoginPage.css';

import LoginForm from "../forms/LoginForm";

export default class LoginPage extends React.Component {
  handleSignIn = (data) => {
    console.log(data)
  }

  render() {
    return (
      <div className="margin-70t-30l">
        <div className="ui six column grid">
          <div className="row">
            <div className="ui six wide column">
              <LoginForm signIn={this.handleSignIn}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
