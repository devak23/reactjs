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

	handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			this.props.callback(this.state.newItemText);
			this.setState({ newItemText: '' });
		}
	};

	render() {
		return (
			<div className='container-fluid	p-4'>
				<div className='row p-2'>
					<div className='col-11'>
						<input
							type='text'
							className='form-control'
							value={this.state.newItemText}
							onChange={this.updateNewItemText}
							onKeyDown={this.handleKeyDown}
						/>
					</div>
					<div className='col-1'>
						<button className='btn btn-primary' onClick={this.handleOnClick}>
							Add
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export { TodoCreator };
