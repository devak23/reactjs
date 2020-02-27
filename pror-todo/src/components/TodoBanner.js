import React from 'react';

class TodoBanner extends React.Component {
	render() {
		return (
			<h4 className='bg-secondary text-white text-center p-2'>
				{this.props.name}'s To Do List ({this.props.tasks.filter((item) => !item.done).length} items todo)
			</h4>
		);
	}
}

export { TodoBanner };
