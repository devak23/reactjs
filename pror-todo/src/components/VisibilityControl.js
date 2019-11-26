import React from 'react';

class VisibilityControl extends React.Component {
	render = () => (
		<div className='form-check'>
			<input
				type='checkbox'
				name='display'
				className='form-check-input'
				checked={this.props.isChecked}
				onChange={(e) => this.props.callback(e.target.checked)}
			/>
			<label htmlFor='display' className='form-check-label'>
				{this.props.description}
			</label>
		</div>
	);
}

export { VisibilityControl };
