let React = require('react');
let CreateClass = require('create-react-class');

let Description = CreateClass({
  render: function() {
    return (
      <div>
        <p>
          Follows the personal and professional lives of six 20 to 30-something-year-old friends living in Manhattan.
        </p>
        <p>Rating: 9.0</p>
      </div>
    );
  }
});

module.exports = Description;
