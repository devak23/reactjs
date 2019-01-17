let React = require('react');
let CreateClass = require('create-react-class');

let MyClassComp = CreateClass({
  getInitialState: function() {
    return {
      color: 'blue'
    };
  },
  handleOnClick: function() {
    this.setState(function(prevState) {
      return { color: prevState.color === 'blue' ? 'magenta' : 'blue' };
    });
  },
  render: function() {
    return (
      <div>
        <div style={{ color: this.state.color }}>
          <h1>{this.props.message}</h1>
        </div>
        <button style={{ height: 30, borderRadius: 4 }} onClick={this.handleOnClick}>
          Change Color
        </button>
      </div>
    );
  }
});

module.exports = MyClassComp;
