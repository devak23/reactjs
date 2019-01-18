require('bootstrap/dist/css/bootstrap.min.css');
let React = require('react');
let ReactDOM = require('react-dom');
let shows = require('./shows');
let Show = require('./Show');

ReactDOM.render(<Show shows={shows} />, document.getElementById('root'));
