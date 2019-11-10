import React, { Fragment } from 'react';
import ClickOnce from './components/ClickOnce';
import StepTracker from './components/StepTracker';

const App = () => {
	return (
		<Fragment>
			<ClickOnce />
			<StepTracker />
		</Fragment>
	);
};

export default App;
