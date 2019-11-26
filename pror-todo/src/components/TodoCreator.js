import React from 'react';

class TodoCreator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newItemText: ''
		};
	}

	updateNewItemText = (event) => {
		this.setState({ newItemText: event.target.value });
	};

	handleOnClick = () => {
		this.props.callback(this.state.newItemText);
	};

	render() {
		return (
			<React.Fragment>
				<input
					type='text'
					className='form-control'
					value={this.state.newItemText}
					onChange={this.updateNewItemText}
				/>
				<button className='btn btn-primary mt-1' onClick={this.handleOnClick}>
					Add
				</button>
			</React.Fragment>
		);
	}
}

export { TodoCreator };
