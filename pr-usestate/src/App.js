import React, { Fragment } from 'react';
import ClickOnce from './components/ClickOnce';
import StepTracker from './components/StepTracker';
import RandomNumberGenerator from './components/RandomNumberGenerator';
import Counts from './components/Counts';

const App = () => {
	return (
		<Fragment>
			<ClickOnce />
			<StepTracker />
			<RandomNumberGenerator />
			<Counts />
		</Fragment>
	);
};

export default App;
