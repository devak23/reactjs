import React from 'react';

class TodoRow extends React.Component {
	render() {
		const item = this.props.item;
		return (
			<tr key={item.action}>
				<td>{item.action}</td>
				<td>
					<input type='checkbox' checked={item.done} onChange={() => this.props.callback(item)} />
				</td>
			</tr>
		);
	}
}

export { TodoRow };
