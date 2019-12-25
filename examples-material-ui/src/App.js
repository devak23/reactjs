import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Routes from './routes';

const App = ({ location }) => (
	<div>
		{Routes.map((item) => <Route key={item.id} exact path={item.path} component={item.component} />)}
		<Route exact path='/' component={Home} location={location} />
	</div>
);

export default App;
