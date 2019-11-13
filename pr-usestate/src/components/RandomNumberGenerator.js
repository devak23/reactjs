import React, { useState } from 'react';
import { commonStyles } from '../utils/StyleHelper';
import { Button } from '@material-ui/core';

const RandomNumberGenerator = () => {
	const classes = commonStyles();

	const [ items, setItems ] = useState([]);

	const handleClick = () => {
		setItems(...items, [
			{
				id: items.length,
				value: Math.random() * 100
			}
		]);
		console.log(items);
	};

	return (
		<div className={classes.border}>
			<div style={{ marginLeft: 0, paddingTop: 10 }}>
				<Button variant='contained' color='secondary' onClick={handleClick}>
					Add Random number
				</Button>
			</div>
			<div style={{ marginLeft: 0, paddingTop: 10 }}>
				Random Numbers: {items.length ? items : 'No items in the list'}
			</div>
		</div>
	);
};

export default RandomNumberGenerator;
