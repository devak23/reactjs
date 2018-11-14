import React, { Component } from 'react';
import LoginForm from './loginForm';

class LoginPage extends Component {
    handleSubmit = (e) => {
        console.log(e.target.name, e.target.value);
    }

    render() {
        return (
            <LoginForm onSubmit={this.handleSubmit} />
        )
    }
}

export default LoginPage;