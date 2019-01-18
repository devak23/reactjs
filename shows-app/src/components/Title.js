let React = require('react');
let CreateClass = require('create-react-class');
let Title = CreateClass({
  render: function(props) {
    return <h3>Show: {this.props.title}</h3>;
  }
});

module.exports = Title;
