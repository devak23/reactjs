import React from 'react';
import Header from './widgets/Header';
import { Link } from 'react-router-dom';
import PathData from './PathData';

const Home = () => (
	<React.Fragment>
		<Header title='Topics of discussion' hideHome={true} />
		<ul>
			{PathData.map((item) => (
				<li key={item.id}>
					<Link to={item.path}>{item.title}</Link>
				</li>
			))}
		</ul>
	</React.Fragment>
);

export default Home;
