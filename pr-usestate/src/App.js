import React from 'react';
import ClickOnce from './components/ClickOnce';
import StepTracker from './components/StepTracker';
import RandomNumberGenerator from './components/RandomNumberGenerator';
import Counts from './components/Counts';
import ControlledInputs from './components/ControlledInputs';
import ReducerComp from './components/ReducerComp';
import ShoppingList from './components/ShoppingList';
import { commonStyles } from './utils/StyleHelper';

const App = () => {
	const classes = commonStyles();
	return (
		<div className={classes.container}>
			<ClickOnce />
			<StepTracker />
			<RandomNumberGenerator />
			<Counts />
			<ControlledInputs />
			<ReducerComp value={35} />
			<ShoppingList />
		</div>
	);
};

export default App;
