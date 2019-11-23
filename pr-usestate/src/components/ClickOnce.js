import React from 'react';
import ClassOneTimeButton from './ClassOneTimeButton';
import FuncOneTimeButton from './FuncOneTimeButton';
import Title from './Title';
import { commonStyles } from '../utils/StyleHelper';

const log = (message) => console.log(message);

const ClickOnce = () => {
	const classes = commonStyles();
	return (
		<div className={classes.border}>
			<Title>Click Once</Title>
			<ClassOneTimeButton label='Class Button' onClick={() => log('Class button is clicked')} />
			<FuncOneTimeButton label='Function Button' onClick={() => log('Function Button is clicked')} />
		</div>
	);
};

export default ClickOnce;
