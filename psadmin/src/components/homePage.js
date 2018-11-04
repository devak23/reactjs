"use strict";

let React = require('react');
let ReactClass = require('create-react-class');

let Home = ReactClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, ReactRouter, Flux for ultra responsive web apps</p>
            </div>
        )
    }
});


module.exports = Home;
