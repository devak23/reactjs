import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import UnderstandingBreakPoints from './components/UnderstandingBreakPoints';
import FillingSpace from './components/FillingSpace';

const App = () => (
	<React.Fragment>
		<Route exact path='/home' component={Home} />
		<Route exact path='/space' component={FillingSpace} />
		<Route exact path='/breakpoints' component={UnderstandingBreakPoints} />
		<Route exact path='/' component={Home} />
	</React.Fragment>
);

export default App;
