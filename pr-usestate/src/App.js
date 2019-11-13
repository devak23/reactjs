import React, { Fragment } from 'react';
import ClickOnce from './components/ClickOnce';
import StepTracker from './components/StepTracker';
import RandomNumberGenerator from './components/RandomNumberGenerator';

const App = () => {
	return (
		<Fragment>
			<ClickOnce />
			<StepTracker />
			<RandomNumberGenerator />
		</Fragment>
	);
};

export default App;
