import React from 'react';
import { TodoBanner } from './components/TodoBanner';
import { TodoCreator } from './components/TodoCreator';
import { TodoRow } from './components/TodoRow';
import { VisibilityControl } from './components/VisibilityControl';

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
			showCompleted: true
		};
	}

	createNewTodo = (task) => {
		if (!this.state.todoItems.find((item) => item.action === task)) {
			this.setState({
				todoItems: [ ...this.state.todoItems, { action: task, done: false } ]
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

	handleShowCompleted = (checked) => {
		this.setState({ showCompleted: checked });
	};

	todoTableRows = (doneValue) =>
		this.state.todoItems
			.filter((item) => item.done === doneValue)
			.map((item) => <TodoRow key={item.action} item={item} callback={this.toggleTodo} />);

	render = () => (
		<div className='container'>
			<TodoBanner name={this.state.username} tasks={this.state.todoItems} />
			<div className='container-fluid'>
				<div className='my-2'>
					<TodoCreator callback={this.createNewTodo} />
				</div>
				<table className='table table-striped table-bordered'>
					<thead>
						<tr>
							<th>Description</th>
							<th>Done</th>
						</tr>
					</thead>
					<tbody>{this.todoTableRows(false)}</tbody>
				</table>
				<div className='bg-secondary text-white text-center p-2'>
					<VisibilityControl
						description='Show Completed Tasks'
						isChecked={this.state.showCompleted}
						callback={(checked) => this.handleShowCompleted(checked)}
					/>
				</div>
				{this.state.showCompleted && (
					<table className='table table-striped table-bordered'>
						<thead>
							<tr>
								<th>Description</th>
								<th>Done</th>
							</tr>
						</thead>
						<tbody>{this.todoTableRows(true)}</tbody>
					</table>
				)}
			</div>
		</div>
	);
}

export default App;
