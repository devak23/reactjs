import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Title from './Title';
import { commonStyles } from '../utils/StyleHelper';

const StepTracker = () => {
	const classes = commonStyles();
	const [steps, setSteps] = useState(0);

	const increment = () => setSteps((steps) => steps + 1);

	return (
		<div className={classes.border}>
			<Title title='Step Tracker' />
			<p>Today you have taken {steps} steps!</p>

			<Button variant='contained' size='large' color='secondary' onClick={increment}>
				Take a Step
			</Button>
			<p>
				StepTracker is a functional component that utilizes useState hook to keep a track of the number of the
				times you press that button.{' '}
				<a href='https://github.com/devak23/reactjs/blob/master/pr-usestate/src/components/StepTracker.js'>
					(Click here
				</a>{' '}
				if you want to see the source code)
			</p>
		</div>
	);
};

export default StepTracker;
