import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class ClassOneTimeButton extends Component {
	state = {
		clicked: false
	};

	handleClick = () => {
		// The handler wont be called as the button is disabled.
		// if we do get here, then its safe to trigger the click.
		this.props.onClick();

		// and no more clicking
		this.setState({ clicked: true });
	};

	render() {
		return (
			<React.Fragment>
				<div style={{ margin: 10, paddingRight: 10, float: 'left' }}>
					<Button
						color='primary'
						variant='contained'
						onClick={this.handleClick}
						disabled={this.state.clicked}
					>
						{this.props.label}
					</Button>
				</div>
				<div style={{ topMargin: 5, float: 'left', padding: 25 }}>Click me once and I will get disabled!</div>
				<div style={{ clear: 'both' }} />
			</React.Fragment>
		);
	}
}

export default ClassOneTimeButton;
