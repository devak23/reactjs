import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	element: {
		marginLeft: 10,
		float: 'left'
	},
	desc: {
		marginTop: 10
	}
});

const FuncOneTimeButton = ({ label, onClick }) => {
	const classes = useStyles();
	const [ clicked, setClicked ] = useState(false);

	const handleClick = () => {
		// invoke the parent's behavior.
		onClick();

		// no more clicking
		setClicked(true);
	};

	return (
		<div>
			<div className={classes.element}>
				<Button color='primary' variant='contained' onClick={handleClick} disabled={clicked}>
					{label}
				</Button>
			</div>
			<div className={`${classes.element} ${classes.desc}`}> Click me once and I will get disabled!</div>
			<div style={{ clear: 'both' }} />
		</div>
	);
};

export default FuncOneTimeButton;
