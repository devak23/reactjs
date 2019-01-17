let React = require('react');
let CreateClass = require('create-react-class');

let MyClassComp = CreateClass({
  render: function() {
    return (
      <div style={{ color: this.props.color }}>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
});

module.exports = MyClassComp;
