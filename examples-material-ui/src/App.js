import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Routes from './Routes';
import { GITHUB_SRC_FILE } from './utils/Constants';

const App = ({ location }) => (
	<div>
		{Routes.map(({ id, path, CustomComponent, githubPath, title }) => (
			<Route
				key={id}
				exact
				path={path}
				render={(props) => <CustomComponent {...props} githubPath={githubPath} title={title} />}
			/>
		))}
		<Route
			exact
			path='/'
			render={(props) => (
				<Home {...props} githubPath={GITHUB_SRC_FILE + '/Home.js'} title='Topics Of Discussion' />
			)}
			location={location}
		/>
	</div>
);

export default App;
