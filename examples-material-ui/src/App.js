import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Routes from './Routes';

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
		<Route exact path='/' component={Home} location={location} />
	</div>
);

export default App;
