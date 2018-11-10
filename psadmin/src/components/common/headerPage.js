"use strict";

let React = require('react');
let ReactClass = require('create-react-class')

let Header = ReactClass({
    render: function () {
        return (

            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <a className="navbar-brand" href="/">
                    <img src="images/pluralsight-logo.png"></img>
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#authors">Authors</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#about">About</a>
                    </li>
                </ul>
            </nav>

        )
    }
});

module.exports = Header;
