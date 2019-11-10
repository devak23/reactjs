import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class ClassOneTimeButton extends Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    // The handler wont be called as the button is disabled.
    // if we do get here, then its safe to trigger the click.
    this.props.onClick();

    // and no more clicking
    this.setState({ clicked: true });
  }

  render() {
    return (
      <Button color='primary' variant='contained' onClick={this.handleClick} disabled={this.state.clicked}>
        {this.props.label}
      </Button>
    )
  }
}


export default ClassOneTimeButton;