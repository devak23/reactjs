let React = require('react');

let Greeting = function(props) {
  let style = {
    color: props.color
  };
  return <h1 style={style}>{props.message}</h1>;
};

module.exports = Greeting;
