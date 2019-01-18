let React = require('react');
let CreateClass = require('create-react-class');

let Poster = CreateClass({
  render: function() {
    return (
      <img
        src='https://www.movieposter.com/posters/archive/main/52/MPW-26106'
        alt='Show poster'
        style={{ height: 400, width: 400 }}
      />
    );
  }
});

module.exports = Poster;
