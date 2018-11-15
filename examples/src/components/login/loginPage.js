import React, { Component } from 'react';
import LoginForm from './loginForm';

class LoginPage extends Component {
    onSubmit = (data) => {
        console.log('data from loginForm: ', data);
    }

    render() {
        return (
            <LoginForm submit={this.onSubmit} />
        )
    }
}

export default LoginPage;