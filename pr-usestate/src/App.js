import React, { Fragment } from 'react';
import ClickOnce from './components/ClickOnce';
import StepTracker from './components/StepTracker';
import RandomNumberGenerator from './components/RandomNumberGenerator';
import Counts from './components/Counts';
import ControlledInputs from './components/ControlledInputs';
import ReducerComp from './components/ReducerComp';

const App = () => {
	return (
		<Fragment>
			<ClickOnce />
			<StepTracker />
			<RandomNumberGenerator />
			<Counts />
			<ControlledInputs />
			<ReducerComp value={35} />
		</Fragment>
	);
};

export default App;
