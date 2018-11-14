import React from 'react';

const LoginForm = ({ onSubmit }) => (
    <div className="ui input">
        <div>
            <input type="text" placeholder="username or email" />
        </div>
        <div>
            <input type="password" placeholder="Password" />
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </div>
);

export default LoginForm;