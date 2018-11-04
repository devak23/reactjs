"use strict";

let React = require('react');
let ReactClass = require('create-react-class')

let About = ReactClass({
    render: function () {
        // the element returned should always be in a single div
        return (
            <div>
                <div className="jumbotron">
                    <h1>About</h1>
                    <p>This application uses the following technologies</p>
                </div>
                <div>
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>ReactDOM</li>
                        <li>ReactCreateClass</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = About;