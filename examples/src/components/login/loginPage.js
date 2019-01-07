import React, { Component } from "react";
import LoginForm from "./loginForm";

class LoginPage extends Component {
  onSubmit = data => {
    window.console.log("data from loginForm: ", data);
  };

  render() {
    const loginStyle = {
      maxWidth: 300,
      margin: 10,
      padding: 10
    };
    return (
      <div style={loginStyle}>
        <LoginForm submit={this.onSubmit} />
      </div>
    );
  }
}

export default LoginPage;
