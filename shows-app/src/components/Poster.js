let React = require('react');

let Poster = function(props) {
  return <img src={props.poster} alt='Show poster' style={{ height: 500, width: 350 }} />;
};

module.exports = Poster;
