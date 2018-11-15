import React from 'react';

class LoginForm extends React.Component {
    state = {
        data: {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value },
        });
    };

    handleSubmit = (e) => {
        e.preventDefault(); // preventing the submission of the page.
        console.log('handleSubmit of LoginForm is invoked')
        this.props.submit(this.state.data);
    }

    render() {
        let { data } = this.state;
        return (
            <form className="ui form">
                <div className="field">
                    <input type="text" name="username" placeholder="username or email" value={data.username} onChange={this.handleChange} />
                </div>
                <div className="field">
                    <input type="password" name="password" placeholder="Password" value={data.password} onChange={this.handleChange} />
                </div>
                <div>
                    <button className="ui primary button" onClick={this.handleSubmit}>Login</button>
                </div>
            </form>
        )
    }
}

export default LoginForm;