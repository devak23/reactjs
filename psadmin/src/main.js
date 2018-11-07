$ = jQuery = require('jquery');
var React = require('react');
var ReactClass = require('create-react-class');
var ReactDOM = require('react-dom');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/headerPage');

let App = ReactClass({
    render: function () {
        let Child;
        console.log(this.props);
        switch (this.props.route) {
            case 'about': Child = About; break;
            default: Child = Home;
        }

        return (
            <div>
                <Header />
                <Child />
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));

window.addEventListener('hashchange', function () {
    let currentRoute = window.location.hash.substr(1);
    ReactDOM.render(<App route={currentRoute} />, document.getElementById('app'));
});

