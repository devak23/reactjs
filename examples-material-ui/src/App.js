import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import ComponentData from './components/ComponentData';

const App = () => (
	<div>
		{ComponentData.map((item) => <Route key={item.id} exact path={item.path} component={item.component} />)}
		<Route exact path='/' component={Home} />
	</div>
);

export default App;
