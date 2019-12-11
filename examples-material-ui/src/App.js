import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import PathData from './components/PathData';

const App = () => (
	<div>
		{PathData.map((item) => <Route key={item.id} exact path={item.path} component={item.component} />)}
		<Route exact path='/' component={Home} />
	</div>
);

export default App;
