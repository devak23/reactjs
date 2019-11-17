import React from 'react';
import M from 'materialize-css';
import 'material-icons';

class App extends React.Component {
	componentDidMount() {
		M.Collapsible.init(document.querySelectorAll('.collapsible'), {
			accordion: false
		});
	}

	render() {
		return (
			<ul className='collapsible' data-collapsible='accordion'>
				<li>
					<div className='collapsible-header'>
						<i className='material-icons'>filter_drama</i>First
						<label htmlFor='demo-1'>Test</label>
						<label className='test'>
							<input id='demo-1' name='demo-1' type='checkbox' onClick={this.handleClick} />
							<span htmlFor='demo-1' />
						</label>
					</div>
					<div className='collapsible-body'>
						<span>Lorem ipsum dolor sit amet.</span>
					</div>
				</li>
				<li>
					<div className='collapsible-header'>
						<i className='material-icons'>place</i>Second
						<label className='test'>
							<input id='demo-2' name='demo-2' type='checkbox' onClick={this.handleClick} />
							<span htmlFor='demo-2' />
						</label>
					</div>
					<div className='collapsible-body'>
						<span>Lorem ipsum dolor sit amet.</span>
					</div>
				</li>
				<li>
					<div className='collapsible-header'>
						<i className='material-icons'>whatshot</i>Third
						<label className='test'>
							<input id='demo-3' name='demo-3' type='checkbox' onClick={this.handleClick} />
							<span htmlFor='demo-3' />
						</label>
					</div>
					<div className='collapsible-body'>
						<span>Lorem ipsum dolor sit amet.</span>
					</div>
				</li>
			</ul>
		);
	}
}

export default App;
