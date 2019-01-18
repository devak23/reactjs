let React = require('react');
let CreateClass = require('create-react-class');
let Title = require('./components/Title');
let Poster = require('./components/Poster');
let Description = require('./components/Description');

let Show = CreateClass({
  render: function() {
    return (
      <div className='text-center'>
        <Title />
        <Poster />
        <Description />
      </div>
    );
  }
});

module.exports = Show;
