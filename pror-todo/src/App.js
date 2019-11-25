import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'Adam',
			todoItems: [
				{ action: 'Buy flowers', done: false },
				{ action: 'Get shoes', done: false },
				{ action: 'Collect Tickets', done: false },
				{ action: 'Call Joe', done: false },
				{ action: 'Buy Milk', done: false },
				{ action: 'Learn React', done: false }
			],
			newItemText: ''
		};
	}

	updateNewItemText = (event) => {
		this.setState({ newItemText: event.target.value });
	};

	createNewTodo = () => {
		if (!this.state.todoItems.find((item) => item.action === this.state.newItemText)) {
			this.setState({
				todoItems: [ ...this.state.todoItems, { action: this.state.newItemText, done: false } ]
			});
		}
	};

	toggleTodo = (todo) => {
		this.setState({
			todoItems: this.state.todoItems.map(
				(item) => (item.action === todo.action ? { ...item, done: !item.done } : item)
			)
		});
	};

	todoTableRows = () =>
		this.state.todoItems.map((item) => (
			<tr key={item.action}>
				<td>{item.action}</td>
				<td>
					<input type='checkbox' checked={item.done} onChange={() => this.toggleTodo(item)} />
				</td>
			</tr>
		));

	render = () => (
		<div className='container'>
			<h4 className='bg-primary text-white text-center p-2'>
				{this.state.username}'s To Do List ({this.state.todoItems.filter((item) => !item.done).length} items
				todo)
			</h4>
			<div className='container-fluid'>
				<div className='my-2'>
					<input
						type='text'
						className='form-control'
						value={this.state.newItemText}
						onChange={this.updateNewItemText}
					/>
					<button className='btn btn-primary mt-1' onClick={this.createNewTodo}>
						Add
					</button>
				</div>
				<table className='table table-striped table-bordered'>
					<thead>
						<tr>
							<th>Description</th>
							<th>Done</th>
						</tr>
					</thead>
					<tbody>{this.todoTableRows()}</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;
