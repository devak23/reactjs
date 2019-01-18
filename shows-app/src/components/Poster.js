let React = require('react');
let CreateClass = require('create-react-class');

let Poster = CreateClass({
  render: function(props) {
    return <img src={this.props.poster} alt='Show poster' style={{ height: 500, width: 350 }} />;
  }
});

module.exports = Poster;
