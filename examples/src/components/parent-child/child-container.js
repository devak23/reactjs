import React, { Component } from "react";
import PropTypes from "prop-types";

class ChildContainer extends Component {
  static propTypes = {
    greet: PropTypes.func.isRequired
  };

  handleOnChange = e => {
    window.console.log(this.props.greet(e.target.value));
  };

  render() {
    return (
      <div>
        <input type="text" name="message" onBlur={this.handleOnChange} />
        <br />
      </div>
    );
  }
}

export default ChildContainer;
