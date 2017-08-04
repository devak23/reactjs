import React from 'react';

// Sometimes there is no need to attach a state to a component. These are stateless components
// props are available in a stateless function
// Playing with State is tricky. It is better to use Redux in these cases.
export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="javascript: -1">{props.homeLink}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
