let React = require('react');

let Description = function(props) {
  return (
    <div>
      <p>{props.plot}</p>
      <p>Rating: {props.rating}</p>
    </div>
  );
};

module.exports = Description;
