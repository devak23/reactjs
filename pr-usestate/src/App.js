import React, { Fragment } from 'react';
import ClassOneTimeButton from './components/ClassOneTimeButton';
import FuncOneTimeButton from './components/FuncOneTimeButton';
import StepTracker from './components/StepTracker';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	border: {
		border: '1px solid #CCC',
		padding: 10,
		margin: 10
	}
});

const log = (message) => console.log(message);

const App = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<p className={classes.border}>
				<ClassOneTimeButton label='Class Button' onClick={() => log('Class button is clicked')} />
				<FuncOneTimeButton label='Function Button' onClick={() => log('Function Button is clicked')} />
			</p>
			<p className={classes.border}>
				<StepTracker />
			</p>
		</Fragment>
	);
};

export default App;
