let React = require('react');
let CreateClass = require('create-react-class');

let Description = CreateClass({
  render: function(props) {
    return (
      <div>
        <p>{this.props.plot}</p>
        <p>Rating: {this.props.rating}</p>
      </div>
    );
  }
});

module.exports = Description;
