import React from 'react';
import Header from './widgets/Header';
import { Link } from 'react-router-dom';

const Home = () => (
	<React.Fragment>
		<Header title='Chapters / Topics of discussion' hideHome={true} />
		<ul>
			<li>
				<Link to='/breakpoints'>Understanding breakpoints</Link>
			</li>
			<li>
				<Link to='/space'>Filling Space</Link>
			</li>
			<li>
				<Link to='/abstracting'>Abstracting Container and Items</Link>
			</li>
		</ul>
	</React.Fragment>
);

export default Home;
